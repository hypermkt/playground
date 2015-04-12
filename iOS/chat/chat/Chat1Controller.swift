//
//  AMBubbleTableViewController.swift
//  chat
//
//  Created by 千葉 誠 on 2015/04/12.
//  Copyright (c) 2015年 千葉 誠. All rights reserved.
//

import Foundation


class Chat1Controller : AMBubbleTableViewController,
    AMBubbleTableDelegate,
    AMBubbleTableDataSource

{
    override func viewDidLoad() {
        super.viewDidLoad()
    
        self.delegate = self
        self.dataSource = self
    }
    
    // DataSource
    func numberOfRows() -> Int {
        return 10
    }
    
    func cellTypeForRowAtIndexPath(indexPath: NSIndexPath!) -> AMBubbleCellType {
        return AMBubbleCellReceived
    }
    
    func textForRowAtIndexPath(indexPath: NSIndexPath!) -> String! {
        return "あいうえお、かきっく"
    }

    func timestampForRowAtIndexPath(indexPath: NSIndexPath!) -> NSDate! {
        return NSDate()
    }
    
    // Delegate
    func didSendText(text: String!) {
    }
    
    func swipedCellAtIndexPath(indexPath: NSIndexPath!, withFrame frame: CGRect, andDirection direction: UISwipeGestureRecognizerDirection) {
    }
    
    func longPressedCellAtIndexPath(indexPath: NSIndexPath!, withFrame frame: CGRect) {
    }
}