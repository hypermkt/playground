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
    let prefs = [
        "",
        "東京",
        "埼玉",
        "神奈川",
    ]
    
    let cities = [
        "入間市",
        "狭山市",
        "所沢市",
    ]

    override func viewDidLoad() {
        super.viewDidLoad()
        self.tableView.delegate = self
        self.tableView.dataSource = self
        
        tableView.registerNib(UINib(nibName: "TopHeaderView", bundle: nil), forCellReuseIdentifier: "TopHeaderView")
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
        return 2
    }
    
    func tableView(tableView: UITableView, titleForHeaderInSection section: Int) -> String? {
        if (section == 0) {
            return nil
        }
        return "\(section)番目のヘッダーのセクションタイトル"
    }
    
    func tableView(tableView: UITableView, titleForFooterInSection section: Int) -> String? {
        return "\(section)番目のフッターのセクションタイトル"
    }
   
    // ヘッダーセクションにViewを指定
    func tableView(tableView: UITableView, viewForHeaderInSection section: Int) -> UIView? {
        if (section == 0) {
            return nil
        }
        let view:UITableViewHeaderFooterView = tableView.dequeueReusableHeaderFooterViewWithIdentifier("HeaderView") as UITableViewHeaderFooterView
        return view
    }
   
    // ヘッダーセクションの高さを指定
    func tableView(tableView: UITableView, heightForHeaderInSection section: Int) -> CGFloat {
        if (section == 0) {
            return 0
        }
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
    
    // ヘッダーセクション内のセルの数を返す
    func tableView(tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        var count:Int?
        switch (section) {
        case 0:
            count = self.prefs.count
            break
        case 1:
            count = self.cities.count
            break
        default:
            break
        }
        return count!
    }

    func tableView(tableView: UITableView, cellForRowAtIndexPath indexPath: NSIndexPath) -> UITableViewCell {
        let cell:UITableViewCell = UITableViewCell(style: UITableViewCellStyle.Default, reuseIdentifier: "Cell")
        let topHeaderViewCell: UITableViewCell = tableView.dequeueReusableCellWithIdentifier("TopHeaderView") as UITableViewCell

        switch (indexPath.section) {
        case 0:
            if (indexPath.row == 0) {
                return topHeaderViewCell
            }
            cell.textLabel?.text = self.prefs[indexPath.row]
            break
        case 1:
            cell.textLabel?.text = self.cities[indexPath.row]
            break
        default:
            break
        }
        return cell
    }
    
    func tableView(tableView: UITableView, heightForRowAtIndexPath indexPath: NSIndexPath) -> CGFloat {
        if (indexPath.section == 0 && indexPath.row == 0) {
            return 150
        }
        return 50
    }
}

