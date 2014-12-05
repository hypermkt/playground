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
    let texts = ["tokyo", "saitama", "kanagawa", "chiba", "gunma", "ibaraki", "shizuoka", "tochigi"]

    override func viewDidLoad() {
        super.viewDidLoad()
        self.tableView.delegate = self
        self.tableView.dataSource = self
        

        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    
    func tableView(tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return 8
    }

    func tableView(tableView: UITableView, cellForRowAtIndexPath indexPath: NSIndexPath) -> UITableViewCell {
        let cell:UITableViewCell = UITableViewCell(style: UITableViewCellStyle.Default, reuseIdentifier: "Cell")

        cell.textLabel?.text = self.texts[indexPath.row]
        return cell
    }
}

