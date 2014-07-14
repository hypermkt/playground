//
//  ViewController.swift
//  DKAudioPlayerSwift
//
//  Created by usr0600221 on 2014/07/14.
//  Copyright (c) 2014年 hypermkt. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
                            
    override func viewDidLoad() {
        super.viewDidLoad()
        var _audioPlayer = DKAudioPlayerSwift()
        _audioPlayer.initWithAudioFilePath("hoge.mp3", width:self.view.frame.size.width, height:0)

//        var frame: CGRect = _audioPlayer.frame;
//        frame.origin = CGPointMake(0, self.view.frame.size.height - self.view.frame.height);
//        _audioPlayer.frame = frame;
        
        self.view.addSubview(_audioPlayer)
        _audioPlayer.showAnimated(true)

        
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

