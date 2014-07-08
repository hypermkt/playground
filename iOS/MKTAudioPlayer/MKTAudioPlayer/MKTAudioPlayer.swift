//
//  MKTAudioPlayer.swift
//  MKTAudioPlayer
//
//  Created by usr0600221 on 2014/07/08.
//  Copyright (c) 2014年 hypermkt. All rights reserved.
//

import UIKit
import AVFoundation

class MKTAudioPlayer {

    var audioFilePath: NSString
    var parentViewController: UIViewController
    var isVisible : Bool
    var isBubbleViewVisible: Bool
    var _bubbleView: UIView
    
    init() {
        self.audioFilePath = "" as NSString
        self.parentViewController = UIViewController()
        self.isVisible = false // TOOD: とりあえず初期化エラー防止のため。要変更
        self.isBubbleViewVisible = false; // TOOD: とりあえず初期化エラー防止のため。要変更
        self._bubbleView = UIView()
    }
    
    func initWithAudioFilePath(audioFilePath: NSString, parentViewController:UIViewController) -> MKTAudioPlayer {
        return self;
    }

    func initWithAudioFilePath(width: CGFloat, height: CGFloat) -> MKTAudioPlayer {
        return self;
    }
    
    func play() {
        
    }

    func pause() {
        
    }

    func dismiss() {
        
    }

    func showAnimated(animated:Bool) {
        
    }

    func hideAnimated(aanimated:Bool) {
        
    }

    func setIsBubbleViewVisible(isBubbleViewVisible:Bool)
    {
        var _isBubbleViewVisible = isBubbleViewVisible
        self._bubbleView.hidden = !isBubbleViewVisible
    }
}