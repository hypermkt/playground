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

    var _bubbleView: UIView;
    
    init() {
        self._bubbleView = UIView();
    }

    func setIsBubbleViewVisible(isBubbleViewVisible:Bool)
    {
        var _isBubbleViewVisible = isBubbleViewVisible;
        self._bubbleView.hidden = !isBubbleViewVisible;
    }
}