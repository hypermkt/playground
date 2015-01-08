//
//  ListViewController.swift
//  SplitViewController
//
//  Created by 千葉 誠 on 2015/01/08.
//  Copyright (c) 2015年 千葉 誠. All rights reserved.
//

import Foundation
import UIKit

class ListViewController: UIViewController,
    UITableViewDataSource,
    UITableViewDelegate
{
    let cities = ["Tokyo", "Kanagawa", "Saitama", "Hokkaidou", "Aomori", "Iwate", "Akira", "Fukuoka", "Chiba", "Shiga", "Saga"]
    @IBOutlet weak var tableView: UITableView!
    
    override func viewDidLoad() {
        self.tableView.delegate = self
        self.tableView.dataSource = self
    }

    func tableView(tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return self.cities.count
    }
    
    func tableView(tableView: UITableView, cellForRowAtIndexPath indexPath: NSIndexPath) -> UITableViewCell {
        let cell: UITableViewCell = UITableViewCell(style: UITableViewCellStyle.Default, reuseIdentifier: nil)
        cell.textLabel.text = self.cities[indexPath.row]
        return cell
    }
}