//
//  DataSource.swift
//  SplitViewController
//
//  Created by 千葉 誠 on 2015/01/10.
//  Copyright (c) 2015年 千葉 誠. All rights reserved.
//

import Foundation
import UIKit

class ListViewDataSource: NSObject, UITableViewDataSource {
    var cities: [String]
    init (cities: [String]) {
        self.cities = cities
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