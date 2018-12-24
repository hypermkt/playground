//
//  NextViewController.swift
//  SwiftButton1
//
//  Created by hypermkt on 2018/12/24.
//  Copyright © 2018 hypermkt. All rights reserved.
//

import UIKit

class NextViewController: UIViewController {
    @IBOutlet var changeLabel: UILabel!
    
    override func viewDidLoad() {
        super.viewDidLoad()
    }
    
    @IBAction func change(_ sender: Any) {
        changeLabel.text = "暗号が解除されました"
    }
    
}
