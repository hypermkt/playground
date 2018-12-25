//
//  ViewController.swift
//  Swift5ImageView
//
//  Created by hypermkt on 2018/12/24.
//  Copyright © 2018 hypermkt. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    @IBOutlet var imageView: UIImageView!
    
    var count = 0
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    @IBAction func doneButton(_ sender: Any) {
        count = count + 1
        
        if (count >= 10 ) {
            imageView.image = UIImage(named: "background")
        }
        
        if (count >= 20) {
            imageView.image = UIImage(named: "beach")
        }
    }
    
}

