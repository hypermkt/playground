//
//  ViewController.swift
//  threadSample
//
//  Created by 千葉 誠 on 2015/03/28.
//  Copyright (c) 2015年 千葉 誠. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    @IBOutlet weak var label: UILabel!
    @IBOutlet weak var paramOne: UITextField!
    @IBOutlet weak var paramTwo: UITextField!
    @IBAction func startAction(sender: AnyObject) {
        //カレントスレッドを取得
        let currentThread = NSThread.currentThread()
        //カレントスレッドがメインスレッドかどうか、マルチスレッド処理となっているかを出力
        NSLog("startAction start　isMainThread=%@ isMultiThreaded=%@",
            currentThread.isMainThread ? "YES" : "NO",
            NSThread.isMultiThreaded() ? "YES" : "NO")
        
        //paramTwo個の新規スレッドを起動
        for var i = 0; i < paramTwo.text.toInt(); i++ {
            //NSThreadExクラスのインスタンスを作成
            var nSThreadEx = NSThreadEx();
            //NSThreadExクラスのインスタンスにparamOne、paramTwoをセット
            nSThreadEx.paramOne = self.paramOne
            nSThreadEx.paramTwo = self.paramTwo
            
            //スレッドの起動
            nSThreadEx.start()
        }
        
        //startAction内での確認用のログ
        for var i = 0; i < paramOne.text.toInt(); i++ {
            NSLog("startAction %d", i)
            sleep(2)
        }
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
}

