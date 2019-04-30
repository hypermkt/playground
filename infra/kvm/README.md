# KVMを利用した仮想環境構築検証

## KVMとは
* Linuxに標準で入っている仮想化環境ソフトウェア

## 環境構築
### KVM関連のインストール

```sh
yum -y install libguestfs libvirt libvirt-client python-virtinst qemu-kvm virt-manager virt-top virt-viewer virt-who virt-install bridge-utils
```

* libguestfs
	*  仮想マシンのディスクイメージにアクセスするライブラリです。
* libvirt
	* シンプル仮想APIを提供するためのライブラリ
* libvirt-client
	* libvertのクライアント側ライブラリ
* python-virtinst
* qemu-kvm
	* 
* virt-manager
* virt-top
* virt-viewer
* virt-who
* virt-install
	* VMをインストールするためのユーティリティ
* bridge-utils
	* 物理インターフェースから仮想インターフェースにブリッジ接続するためのもの？

### KVMの起動
```sh
$ systemctl start libvirtd
$ systemctl enable libvirtd
```

### virt-managerの起動
* 注意: ローカルサーバー側で `export DIPLAY=:0.0` を事前に実行しておくこと

```
sudo XAUTHORITY=~/.Xauthority virt-manager
```

### ネットワーク

```sh
cp /etc/sysconfig/network-scripts/ifcfg-eth0 /etc/sysconfig/network-scripts/ifcfg-br0
```

### ゲストOSのインストール
CentOS7のイメージファイルをダウンロード
```sh
cd /tmp
# -L: リダイレクトも追う
# -O: ファイルをそのままダウンロード
curl -LO http://ftp.nara.wide.ad.jp/pub/Linux/centos/7/isos/x86_64/CentOS-7-x86_64-Minimal-1810.iso
```


* `--name` : 仮想マシン名
* `--vcpus` : 仮想CPU数
* `--ram` : 割り当てるRAM
* `--accelerate` : カーネル加速化機能を使用
* `--hvm` : 完全に仮想化されたゲストとしてゲストを設定
* `--disk` : ストレージの指定
* `--location` : ディスクディストリビューションからのインストール
* `--network` : ゲストOS が使用するネットワークインタフェースを指定する。
* `--nographic` : グラフィカル表示の方法
* `--extra-args` : 追加の引数

```sh
virt-install --connect=qemu:///system \
--name=centos7 \
--vcpus=1 \
--ram=512 \
--accelerate \
--hvm \
--disk path=/var/lib/libvirt/images/centos7.img,size=20,format=qcow2 \
--location='/tmp/CentOS-7-x86_64-Minimal-1810.iso' \
--network bridge=br0 \
--nographics \
--extra-args='console=tty0 console=ttyS0,115200n8'
```

## 参考
* [KVMから始めるサーバー仮想化入門centos6 \| 株式会社インディバル](https://www.indival.co.jp/2016/08/19/3028/)
* [CentOS7上にKVM環境を構築する (CUI環境) - Qiita](https://qiita.com/jimaoka/items/d528a7f55e832982c193)
* [Webgraphviz](http://www.webgraphviz.com/)
* [3.4. virt-install および virt-manager のインストールオプションの比較 - Red Hat Customer Portal](https://access.redhat.com/documentation/ja-jp/red_hat_enterprise_linux/7/html/virtualization_deployment_and_administration_guide/sect-virtual_machine_installation-virt-install-virt-manager-matrix)
* [コマンドライン・ツール](http://otndnld.oracle.co.jp/document/products/oracleVM/220/generic/B57076-01/commandline.htm)
* [第11章 QEMU-img および QEMU ゲストエージェント - Red Hat Customer Portal](https://access.redhat.com/documentation/ja-jp/red_hat_enterprise_linux/6/html/virtualization_administration_guide/chap-virtualization_administration_guide-tips_and_tricks)
* [Gtk\-WARNING \*\* cannsot open display on CentOS 7 minimal server install \| Bits and Dragons](https://bitsanddragons.wordpress.com/2017/08/23/gtk-warning-cannot-open-display-on-centos-7-minimal-server-install/)
* [CentOS 7.4でKVM構築(基盤構築～仮想マシンインストールまで) – せろとにんぱわー.](https://www.serotoninpower.club/archives/400)
* [virt-managerが動かない - Qiita](https://qiita.com/o_nishy/items/c3bdf6a8e71a25f919d8)
* [MacにサーバーのGUIアプリを表示する - Qiita](https://qiita.com/yyamnk/items/e7984804f9b34276128e)
