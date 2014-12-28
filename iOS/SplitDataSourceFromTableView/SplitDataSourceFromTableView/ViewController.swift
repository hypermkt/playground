//
//  ViewController.swift
//  SplitDataSourceFromTableView
//
//  Created by 千葉 誠 on 2014/12/28.
//  Copyright (c) 2014年 千葉 誠. All rights reserved.
//

import UIKit

class ViewController: UIViewController,
//    UITableViewDataSource,
    UITableViewDelegate
{
    
    let cities = [
        "入間市",
        "狭山市",
        "飯能市",
    ]

    @IBOutlet weak var tableView: UITableView!

    override func viewDidLoad() {
        super.viewDidLoad()

//        var dataSource = TableViewDataSource()
//        dataSource.cities = self.cities
        self.tableView.dataSource = TableViewDataSource() as UITableViewDataSource
//        self.tableView.dataSource = dataSource
        
//        self.tableView.dataSource = self
        self.tableView.delegate = self
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
//    func tableView(tableView: UITableView, cellForRowAtIndexPath indexPath: NSIndexPath) -> UITableViewCell {
//        let cell: UITableViewCell = UITableViewCell(style: UITableViewCellStyle.Default, reuseIdentifier: nil)
//        
//        cell.textLabel.text = self.cities[indexPath.row]
//        return cell
//    }
//
//    func tableView(tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
//        return cities.count
//    }
}
