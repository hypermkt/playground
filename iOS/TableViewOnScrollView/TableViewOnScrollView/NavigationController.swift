//
//  UINavigationController.swift
//  TableViewOnScrollView
//
//  Created by 千葉 誠 on 2014/12/07.
//  Copyright (c) 2014年 千葉 誠. All rights reserved.
//

import Foundation
import UIKit

class NavigationController: UINavigationController {
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
        NSLog("NavigationController viewDidLoad")
        
        // Do any additional setup after loading the view, typically from a nib.
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
}