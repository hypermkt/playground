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
    let messages : Array<Dictionary<String, AnyObject>> = [
        [
            "message" : "hoge",
            "type" : AMBubbleCellReceived
        ]
    ]
    
    override func viewDidLoad() {
        super.viewDidLoad()
    
        self.delegate = self
        self.dataSource = self
        self.setTableStyle(AMBubbleTableStyleFlat)
        
        let options : NSDictionary = [
            AMOptionsTimestampEachMessage : false, // 時刻を非表示
            AMOptionsAvatarSize : 0, // アバターは利用しないため横幅を0にして非表示
            AMOptionsBubbleTableBackground : UIColor(red:0.96, green:0.96, blue:0.96, alpha:1.0),
        ];
        self.setBubbleTableOptions(options)
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