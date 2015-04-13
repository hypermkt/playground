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
    let messages : Array<Dictionary<String, Any?>> = [
        [
            "name" : "God",
            "message" : "received message",
            "type" : AMBubbleCellReceived
        ],
        [
            "name" : "hinashiki",
            "message" : "sent message",
            "type" : AMBubbleCellReceived
        ],
        [
            "name" : "チッピー",
            "message" : "sent message",
            "type" : AMBubbleCellReceived
        ],
        [
            "name" : "バーチー",
            "message" : "sent message",
            "type" : AMBubbleCellSent
        ],
    ]
    
    override func viewDidLoad() {
        super.viewDidLoad()
        NSLog("\(self.messages)")
    
        self.delegate = self
        self.dataSource = self
        self.setTableStyle(AMBubbleTableStyleFlat)
       
        let sendButton = UIImage(named: "buttonSendFlat.png")
        let options : NSDictionary = [
            AMOptionsTimestampEachMessage : false, // 時刻を非表示
            AMOptionsAvatarSize : 0, // アバターは利用しないため横幅を0にして非表示
            AMOptionsAccessorySize : 10, // 縦幅
            AMOptionsImageButton : sendButton!,
            AMOptionsImageBar : sendButton!
        ];
        self.setBubbleTableOptions(options)
    }
    
    // DataSource
    func numberOfRows() -> Int {
        return self.messages.count
    }
    
    func cellTypeForRowAtIndexPath(indexPath: NSIndexPath!) -> AMBubbleCellType {
        return self.messages[indexPath.row]["type"] as AMBubbleCellType
    }
    
    func textForRowAtIndexPath(indexPath: NSIndexPath!) -> String! {
        return self.messages[indexPath.row]["message"] as String!
    }

    func timestampForRowAtIndexPath(indexPath: NSIndexPath!) -> NSDate! {
        return NSDate()
    }
    
    func usernameForRowAtIndexPath(indexPath: NSIndexPath!) -> String! {
        return self.messages[indexPath.row]["name"] as String!
    }
    
    // Delegate
    func didSendText(text: String!) {
    }
    
    func swipedCellAtIndexPath(indexPath: NSIndexPath!, withFrame frame: CGRect, andDirection direction: UISwipeGestureRecognizerDirection) {
    }
    
    func longPressedCellAtIndexPath(indexPath: NSIndexPath!, withFrame frame: CGRect) {
    }
}