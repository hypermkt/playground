//
//  ViewController.swift
//  TableViewTest
//
//  Created by 千葉 誠 on 2014/11/30.
//  Copyright (c) 2014年 千葉 誠. All rights reserved.
//

import Foundation
import UIKit

class ViewController: UIViewController,
    UITableViewDelegate,
    UITableViewDataSource
{
    @IBOutlet weak var tableView: UITableView!
    var texts = [
        "Hokkaidou",
        "Aomori",
        "Iwate",
        "Akita",
        "Fukushima",
        "Nagano",
        "Tochigi",
        "Gunma",
        "Saitama",
        "Ibaragi",
        "Saitama",
        "Tokyo",
        "Chiba",
        "Kanagawa",
    ]
    override func viewDidLoad() {
        super.viewDidLoad()
        tableView.delegate = self
        tableView.dataSource = self
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    // セクション内の行数を返す
    func tableView(tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return self.texts.count
    }
    
    func tableView(tableView: UITableView, cellForRowAtIndexPath indexPath: NSIndexPath) -> UITableViewCell {
        let cell: UITableViewCell = UITableViewCell(style: UITableViewCellStyle.Default, reuseIdentifier: "Cell")
        cell.textLabel?.text = texts[indexPath.row]
        cell.accessoryType = UITableViewCellAccessoryType.DisclosureIndicator
        return cell
    }
}

