//
//  NSThreadEx.swift
//  threadSample
//
//  Created by 千葉 誠 on 2015/03/28.
//  Copyright (c) 2015年 千葉 誠. All rights reserved.
//

import UIKit

class NSThreadEx: NSThread {
    //paramOneとparamTwoをインスタンス変数として保持
    var paramOne: UITextField!
    var paramTwo: UITextField!
    class var sharedInstance : NSThreadEx {
        struct Static {
            static let instance : NSThreadEx = NSThreadEx()
        }
        return Static.instance
    }
    override func main() {
        //カレントスレッドを取得
        let currentThread = NSThread.currentThread()
        //カレントスレッドがメインスレッドかどうか、マルチスレッド処理となっているかを出力
        NSLog("NSThreadEx start　isMainThread=%@ isMultiThreaded=%@",
            currentThread.isMainThread ? "YES" : "NO",
            NSThread.isMultiThreaded() ? "YES" : "NO")
        
        //NSThreadEx内での確認用のログ
        for var i = 0; i < paramOne.text.toInt(); i++ {
            objc_sync_enter(NSThreadEx.sharedInstance)
            NSLog("NSThreadEx %d", i)
            sleep(1)
            objc_sync_exit(NSThreadEx.sharedInstance)
        }
    }
}
