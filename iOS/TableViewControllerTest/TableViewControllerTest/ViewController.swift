//
//  ViewController.swift
//  TableViewControllerTest
//
//  Created by 千葉 誠 on 2014/12/07.
//  Copyright (c) 2014年 千葉 誠. All rights reserved.
//

import UIKit

class ViewController: UITableViewController, UITableViewDataSource, UITableViewDelegate {
    @IBOutlet var tablewView: UITableView!
    let texts = [
        "池袋",
        "目白",
        "高田馬場",
        "新大久保",
        "新宿",
        "代々木",
        "原宿",
        "渋谷",
        "恵比寿",
        "目黒",
        "五反田",
        "大崎",
        "品川",
    ]
    override func viewDidLoad() {
        super.viewDidLoad()
        NSLog("viewDidLoad")
        // Do any additional setup after loading the view, typically from a nib.
        var nib = UINib(nibName: "FooterView", bundle: nil)
        tableView.registerNib(nib, forHeaderFooterViewReuseIdentifier: "FooterView")
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    override func tableView(tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        NSLog("tableView::numberOfRowsInSection height: \(tableView.frame.size.height)")
        return texts.count
    }
    
    override func tableView(tableView: UITableView, cellForRowAtIndexPath indexPath: NSIndexPath) -> UITableViewCell {
        NSLog("tableView::cellForRowAtIndexPath height: \(tableView.frame.size.height)")
        let cell:UITableViewCell = UITableViewCell(style: UITableViewCellStyle.Default, reuseIdentifier: "Cell")
        cell.textLabel?.text = self.texts[indexPath.row]
        return cell
    }
    
    override func tableView(tableView: UITableView, heightForFooterInSection section: Int) -> CGFloat {
        return 50
    }

    override func tableView(tableView: UITableView, viewForFooterInSection section: Int) -> UIView? {
        let view: UIView = tableView.dequeueReusableHeaderFooterViewWithIdentifier("FooterView") as UIView
        return view
//        let view: UIView = tableView.dequeueReusableCellWithIdentifier("FooterView", forIndexPath: indexPath) as UIRankingTableViewCell
    }
}

