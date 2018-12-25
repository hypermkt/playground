//
//  ViewController.swift
//  CountUp
//
//  Created by hypermkt on 2018/12/24.
//  Copyright © 2018 hypermkt. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    @IBOutlet var countLabel: UILabel!
    
    //var val = 0
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    @IBAction func countUp(_ sender: Any) {
        //val = val + 1
        //countLabel.text = String(val)
    }
    @IBAction func countDown(_ sender: Any) {
        //val = val - 1
        //countLabel.text = String(val)
    }
    
}

