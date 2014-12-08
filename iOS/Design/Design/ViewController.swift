//
//  ViewController.swift
//  Design
//
//  Created by 千葉 誠 on 2014/12/06.
//  Copyright (c) 2014年 千葉 誠. All rights reserved.
//

import UIKit

class ViewController: UIViewController,
    UITableViewDataSource,
    UITableViewDelegate {

    @IBOutlet weak var tableView: UITableView!
    let texts = [
        "東京",
        "埼玉",
        "神奈川",
//        "千葉",
//        "群馬",
//        "茨城",
//        "静岡",
//        "栃木",
//        "福島",
//        "滋賀",
//        "大阪",
//        "福岡",
    ]

    override func viewDidLoad() {
        super.viewDidLoad()
        self.tableView.delegate = self
        self.tableView.dataSource = self
        
        tableView.registerNib(UINib(nibName: "HeaderView", bundle: nil), forHeaderFooterViewReuseIdentifier: "HeaderView")
        tableView.registerNib(UINib(nibName: "FooterView", bundle: nil), forHeaderFooterViewReuseIdentifier: "FooterView")
        
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
   
    // テーブル全体のセクションの数を返す
    func numberOfSectionsInTableView(tableView: UITableView) -> Int {
        return 3
    }
    
    func tableView(tableView: UITableView, titleForHeaderInSection section: Int) -> String? {
        return "\(section)番目のヘッダーのセクションタイトル"
    }
    
    func tableView(tableView: UITableView, titleForFooterInSection section: Int) -> String? {
        return "\(section)番目のフッターのセクションタイトル"
    }
   
    // ヘッダーセクションにViewを指定
    func tableView(tableView: UITableView, viewForHeaderInSection section: Int) -> UIView? {
        let view:UITableViewHeaderFooterView = tableView.dequeueReusableHeaderFooterViewWithIdentifier("HeaderView") as UITableViewHeaderFooterView
        return view
    }
   
    // ヘッダーセクションの高さを指定
    func tableView(tableView: UITableView, heightForHeaderInSection section: Int) -> CGFloat {
        let view:UITableViewHeaderFooterView = tableView.dequeueReusableHeaderFooterViewWithIdentifier("HeaderView") as UITableViewHeaderFooterView
        return view.frame.size.height
    }
    
    func tableView(tableView: UITableView, viewForFooterInSection section: Int) -> UIView? {
        let view:UITableViewHeaderFooterView = tableView.dequeueReusableHeaderFooterViewWithIdentifier("FooterView") as UITableViewHeaderFooterView
        return view
    }
    
    func tableView(tableView: UITableView, heightForFooterInSection section: Int) -> CGFloat {
        let view:UITableViewHeaderFooterView = tableView.dequeueReusableHeaderFooterViewWithIdentifier("FooterView") as UITableViewHeaderFooterView
        return view.frame.size.height
    }
    
    // ヘッダーセクション内のセルの数を返w
    func tableView(tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return texts.count
    }

    func tableView(tableView: UITableView, cellForRowAtIndexPath indexPath: NSIndexPath) -> UITableViewCell {
        let cell:UITableViewCell = UITableViewCell(style: UITableViewCellStyle.Default, reuseIdentifier: "Cell")

        cell.textLabel?.text = self.texts[indexPath.row]
        return cell
    }
}

