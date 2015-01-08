//
//  ViewController.swift
//  SplitViewController
//
//  Created by 千葉 誠 on 2015/01/08.
//  Copyright (c) 2015年 千葉 誠. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        let pickup: PickupViewController = storyboard?.instantiateViewControllerWithIdentifier("PickupViewController") as PickupViewController
        let list: ListViewController = storyboard?.instantiateViewControllerWithIdentifier("ListViewController") as ListViewController
        addChildViewController(pickup)
        addChildViewController(list)
        pickup.view.frame = CGRectMake(0, 0, 320, 200)
        list.view.frame = CGRectMake(0, 200, 320, 386)
        self.view.addSubview(pickup.view)
        self.view.addSubview(list.view)
        
        
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

