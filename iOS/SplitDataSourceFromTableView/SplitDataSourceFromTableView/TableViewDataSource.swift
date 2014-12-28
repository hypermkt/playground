//
//  TableViewDataSource.swift
//  SplitDataSourceFromTableView
//
//  Created by 千葉 誠 on 2014/12/28.
//  Copyright (c) 2014年 千葉 誠. All rights reserved.
//

import Foundation
import UIKit

class TableViewDataSource: NSObject,
    UITableViewDataSource {

    var cities: Array<String>?

    func tableView(tableView: UITableView, cellForRowAtIndexPath indexPath: NSIndexPath) -> UITableViewCell {
        let cell: UITableViewCell = UITableViewCell(style: UITableViewCellStyle.Default, reuseIdentifier: nil)
        
        cell.textLabel.text = "hoge"
//        cell.textLabel.text = self.cities![indexPath.row]
        return cell
    }
    
    func tableView(tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return 3
//        return cities!.count
    }
}
