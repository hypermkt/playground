//
//  ViewController.swift
//  TableViewTest2
//
//  Created by 千葉 誠 on 2014/12/07.
//  Copyright (c) 2014年 千葉 誠. All rights reserved.
//

import UIKit

class ViewController: UIViewController,
    UITableViewDelegate,
    UITableViewDataSource,
    UIScrollViewDelegate {
    @IBOutlet weak var tableView: UITableView!
    @IBOutlet weak var scrollView: UIScrollView!
    
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
        
        self.tableView.delegate = self
        self.tableView.dataSource = self
//        self.tableView.rowHeight = 50
        
        self.scrollView.delegate = self
        
//        self.view.frame = CGRectMake(0, 0, 320, 800)
//        self.tableView.frame = CGRectMake(0, 320, 320, 800)
        self.tableView.reloadData()
        // Do any additional setup after loading the view, typically from a nib.
        NSLog("viewDidLoad tableView height: \(tableView.frame.size.height)")
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    func tableView(tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        NSLog("tableView::numberOfRowsInSection height: \(tableView.frame.size.height)")
        return texts.count
    }
    
    func tableView(tableView: UITableView, cellForRowAtIndexPath indexPath: NSIndexPath) -> UITableViewCell {
//        self.tableView.frame = CGRectMake(0, 320, 320, 800)
        NSLog("tableView::cellForRowAtIndexPath height: \(tableView.frame.size.height)")
        let cell:UITableViewCell = UITableViewCell(style: UITableViewCellStyle.Default, reuseIdentifier: "Cell")
        cell.textLabel?.text = self.texts[indexPath.row]
        return cell
    }
    
    func tableView(tableView: UITableView, didSelectRowAtIndexPath indexPath: NSIndexPath) {
        NSLog("tableView::didSelectRowAdIndexPath height: \(tableView.frame.size.height)")
//        self.tableView.frame = CGRectMake(0, 320, 320, 800)
    }

    
    func scrollViewDidScroll(scrollView: UIScrollView) {
        NSLog("scrollViewDidScroll height: \(tableView.frame.size.height)")
//        self.tableView.frame = CGRectMake(0, 320, 320, 800)
    }
    
    override func viewDidLayoutSubviews() {
        // ビューのレイアウトが終わると呼ばれる
//        NSLog("viewDidLayoutSubviews")
        scrollView.contentSize = CGSizeMake(320, 800)
//        scrollView.frame = self.view.bounds
        scrollView.scrollEnabled = true
        
        self.tableView.frame = CGRectMake(0, 320, 320, 800)
    }
}

