
//
//  DKAudioPlayerSwift.swift
//  DKAudioPlayerSwift
//
//  Created by usr0600221 on 2014/07/14.
//  Copyright (c) 2014年 hypermkt. All rights reserved.
//

import UIKit
import AVFoundation

class DKAudioPlayerSwift :UIView {
    
    var _playerHeight: Float;
    var _playerWidth: Float;
    var _inset: Float;
    
    var audioFilePath: NSString
    var parentViewController: UIViewController
    var isVisible : Bool
    var isBubbleViewVisible: Bool
    var _bubbleView: UIView
    var _slider : UISlider
    
    var _audioPlayer: AVAudioPlayer
    var _playPauseButton: UIButton
    
    init() {
        
        self._playerHeight = 0.0
        self._playerWidth = 0.0
        self._inset = 0.0
        
        self.audioFilePath = "" as NSString
        self.parentViewController = UIViewController()
        self.isVisible = false // TOOD: とりあえず初期化エラー防止のため。要変更
        self.isBubbleViewVisible = false; // TOOD: とりあえず初期化エラー防止のため。要変更
        self._bubbleView = UIView()
        self._slider = UISlider()
        
        self._audioPlayer = AVAudioPlayer()
        self._playPauseButton = UIButton()
        
        var frame: CGRect = CGRectMake(0, 0, 0, 0);
        super.init(frame: frame);
    }
    
    func initWithAudioFilePath(audioFilePath: NSString, parentViewController:UIViewController) -> DKAudioPlayerSwift {
        var frame: CGRect = CGRectMake(0, 0, parentViewController.view.bounds.size.width, 75.0)
        
        // selfへの代入はどうする？
        self.initWithAudioFilePath(audioFilePath, width: frame.size.width, height: frame.size.height);
        
        frame.origin.y = parentViewController.view.bounds.size.height;
        self.frame = frame;
        parentViewController.view.addSubview(self);
        parentViewController.view.bringSubviewToFront(self);
        
        return self;
    }
    
    func initWithAudioFilePath(audioFilePath: NSString, width: CGFloat, height: CGFloat) -> DKAudioPlayerSwift {
        var _audioFilePath = audioFilePath;
        // NSAssert(audioFilePath != nil, @"Audio file path cannot be nil");
        
        _playerHeight = frame.size.height;
        _playerWidth = frame.size.width;
        _inset = 15;
        var url: NSURL = NSURL(fileURLWithPath: audioFilePath)
        var error: NSError? = nil
        var _audioPlayer = AVAudioPlayer(contentsOfURL: url, fileTypeHint: "mp3", error: nil)
        
        _audioPlayer.volume = 0.5;
        //_audioPlayer.delegate = self;
        //NSAssert(error == nil, @"Audio file not found");
        var sharedInstance: AVAudioSession = AVAudioSession()
        sharedInstance.setCategory(AVAudioSessionCategoryPlayback, error: nil)
        sharedInstance.setActive(true, error: nil)
        
        
        var totalPlaybackTime:Int = Int(_audioPlayer.duration);
        var tHours:Int = Int(totalPlaybackTime / 3600);
        var tMins:Int = Int((totalPlaybackTime/60) - tHours*60);
        var tSecs:Int = Int(totalPlaybackTime % 60 );
        var _durationString: String = (tHours > 0) ?
            "¥(tHours):¥(tMins):¥(tSecs)" :
        "¥(tMins):¥(tSecs)"
        
        var _time = NSTimer(timeInterval: 0.5, target: self, selector: Selector("onTimer"), userInfo: nil, repeats: true)
        
        self.clipsToBounds = false;
        self.autoresizesSubviews = true;
        self.backgroundColor = UIColor.clearColor()
        var backgroundView: UIView = UIView(frame: self.bounds)
        
        backgroundView.backgroundColor = UIColorFromRGB(0xe8e8e8)
        backgroundView.autoresizingMask = UIViewAutoresizing.FlexibleWidth
        self.addSubview(backgroundView)
        
        var playerBgImageView: UIImageView = UIImageView(image: UIImage(contentsOfFile: "player_player_bg"))
        playerBgImageView.frame = CGRectMake(_inset, _inset, _playerWidth - _inset * 2, _playerHeight - _inset * 2);
        playerBgImageView.autoresizingMask = UIViewAutoresizing.FlexibleWidth;
        self.addSubview(playerBgImageView)
        
        var _playPauseButton : UIButton = UIButton.buttonWithType(UIButtonType.Custom) as UIButton
        _playPauseButton.autoresizesSubviews = true;
        _playPauseButton.imageView.contentMode = UIViewContentMode.ScaleToFill;
        _playPauseButton.setImage(UIImage(contentsOfFile: "player_play"), forState: UIControlState.Normal)
        _playPauseButton.frame = CGRectMake(_inset, _inset, _playerHeight - 2 * _inset, _playerHeight - 2 * _inset)
        _playPauseButton.addTarget(self, action: Selector("playOrPause"), forControlEvents: UIControlEvents.TouchUpInside)
        self.addSubview(_playPauseButton)
        
        
        var originY: Float = _playerHeight / 2.0 - 34 / 2;
        var originX: Float = _playPauseButton.frame.origin.x + _playPauseButton.frame.size.width + _inset;
        var sliderFrame : CGRect = CGRectMake(originX, originY, frame.size.width - originX - _inset * 2, 34);
        var _slider : UISlider = UISlider(frame: sliderFrame)
        _slider.autoresizingMask = UIViewAutoresizing.FlexibleWidth;
        /*
        if ( ! IS_IOS7_OR_HIGHER ) {
        [_slider setMaximumTrackImage:[[UIImage imageNamed:@"player_progress_bg"] resizableImageWithCapInsets:UIEdgeInsetsMake(0, 10, 0, 10)]  forState:UIControlStateNormal];
        [_slider setMinimumTrackImage:[[UIImage imageNamed:@"player_progress_blue"] resizableImageWithCapInsets:UIEdgeInsetsMake(0, 10, 0, 10)]  forState:UIControlStateNormal];
        }
        */
        _slider.setThumbImage(UIImage(contentsOfFile: "player_circle"), forState: UIControlState.Normal)
        _slider.minimumValue = 0.0;
        //_slider.maximumValue = Float(_audioPlayer.duration);
        _slider.maximumValue = 30.0;
        _slider.addTarget(self, action: Selector("sliderChanged"), forControlEvents: UIControlEvents.ValueChanged)
        self.addSubview(_slider)
        
        
        var _bubbleView :UIView = UIView(frame: CGRectMake(160, _slider.frame.origin.y - 46 + _slider.frame.size.height / 2, 72, 46))
        _bubbleView.backgroundColor = UIColor.clearColor();
        _bubbleView.frame = createCurrentPositionFrame();
        var bubbleImageView:UIImageView = UIImageView(image: UIImage(contentsOfFile: "player_bubble"))
        bubbleImageView.contentMode = UIViewContentMode.ScaleToFill
        bubbleImageView.frame = _bubbleView.bounds;
        self.addSubview(bubbleImageView)
        
        
        var _timeLabel: UILabel = UILabel(frame: CGRectMake(0, 10, 72, 11))
        _timeLabel.backgroundColor = UIColor.clearColor();
        _timeLabel.textAlignment = NSTextAlignment.Center
        _timeLabel.font = UIFont(name: "HelveticaNeue", size: 10)
        _timeLabel.text = calculateCurrentDuration()
        self.addSubview(_timeLabel)
        
        _bubbleView.hidden = true;
        self.addSubview(_bubbleView)
        
        self.autoresizingMask = UIViewAutoresizing.FlexibleWidth | UIViewAutoresizing.FlexibleTopMargin;
        
        return self
    }
    
    func play() {
        if (!self._audioPlayer.playing) {
            self._audioPlayer.play()
            self.isBubbleViewVisible = true;
            updatePlayButtonImage()
        }
    }
    
    func playOrPause() {
        if (self._audioPlayer.playing) {
            pause()
        } else {
            play()
        }
    }
    
    func pause() {
        if (self._audioPlayer.playing) {
            self._audioPlayer.stop()
            updatePlayButtonImage()
        }
    }
    
    func dismiss() {
        // どうすればいいの？
        // self._audioPlayer = nil;
        // removeFromSuperview()
    }
    
    func showAnimated(animated:Bool) {
        self.isVisible = true;
        changeToVisible(self.isVisible, animated: animated)
    }
    
    func sliderChanged(slider: UISlider)
    {
        // setCurrentTimeメソッドがない？
        // refs : https://developer.apple.com/library/ios/documentation/AVFoundation/Reference/AVAudioPlayerClassReference/Chapters/Reference.html#//apple_ref/occ/instp/AVAudioPlayer
        // [_audioPlayer setCurrentTime:(int)slider.value];
    }
    
    func hideAnimated(animated:Bool) {
        self.isVisible = false;
        changeToVisible(self.isVisible, animated: animated)
    }
    
    func changeToVisible(visible: Bool, animated:Bool) {
        var playerFrame: CGRect = self.frame;
        var parentFrame: CGRect = self.parentViewController.view.bounds;
        
        if (visible) {
            playerFrame.origin.y -= _playerHeight;
            parentFrame.size.height -= _playerHeight;
            _bubbleView.hidden = false;
        }
        else {
            playerFrame.origin.y += _playerHeight;
            parentFrame.size.height += _playerHeight;
            _bubbleView.hidden = true;
        }
        
        if (animated) {
            UIView.animateWithDuration(
                0.4,
                delay: 0.0,
                options: UIViewAnimationOptions.CurveEaseInOut,
                animations: {
                    self.frame = playerFrame
                },
                completion: {
                    // MEMO: なぜ分からないけど下記を書かないとエラーになる
                    (value: Bool) in
                    println("Animation End");
                }
            )
        }
        else {
            self.frame = playerFrame;
        }
    }
    
    func setIsBubbleViewVisible(isBubbleViewVisible:Bool)
    {
        var _isBubbleViewVisible = isBubbleViewVisible
        self._bubbleView.hidden = !isBubbleViewVisible
    }
    
    func updatePlayButtonImage() {
        // MEMO: .isPlayingではアクセス出来なかった
        var imageName: NSString = self._audioPlayer.playing ? "player_pause" : "player_play"
        
        // [_playPauseButton setImage:[UIImage imageNamed:imageName] forState:UIControlStateNormal];
        self._playPauseButton.setImage(UIImage(named:imageName), forState: UIControlState.Normal)
    }
    
    
    func calculateCurrentDuration() -> NSString {
        //var currentPlaybackTime: Double = self._audioPlayer.currentTime
        var currentPlaybackTime: Double = 0
        var currentHours: Int = Int(currentPlaybackTime / 3600)
        var currentMinutes: Int = (Int(currentPlaybackTime)/60)-currentHours*60
        var currentSeconds: Int = (Int(currentPlaybackTime) % 60);
        var currentTimeString: NSString = (currentHours > 0) ?
            "¥(currentHours):¥(currentMinutes):¥(currentSeconds)" :
        "¥(currentMinutes), ¥(currentSeconds)"
        
        return "¥(currentTimeString) / ¥(durationString)";
    }
    
    func createCurrentPositionFrame() -> CGRect {
        var frame: CGRect = self._bubbleView.frame
        frame.origin.x = self.xPositionFromSliderValue(self._slider) - self._bubbleView.frame.size.width / 2.0;
        return frame;
    }
    
    func xPositionFromSliderValue(aSlider: UISlider) -> Float {
        var sliderRange: Float = aSlider.frame.size.width;
        //var sliderRange: Float = aSlider.frame.size.width - aSlider.currentThumbImage.size.width;
        var sliderOrigin :Float = aSlider.frame.origin.x;
        //var sliderOrigin :Float = aSlider.frame.origin.x + (aSlider.currentThumbImage.size.width / 2.0);
        var sliderValueToPixels: Float = ((aSlider.value-aSlider.minimumValue)/(aSlider.maximumValue-aSlider.minimumValue) * sliderRange) + sliderOrigin;
        return sliderValueToPixels;
    }
    
    // [UIColor colorWithRed:((float)((rgbValue & 0xFF0000) >> 16))/255.0 green:((float)((rgbValue & 0xFF00) >> 8))/255.0 blue:((float)(rgbValue & 0xFF))/255.0 alpha:1.0]
    func UIColorFromRGB(rgbValue: UInt) -> UIColor {
        return UIColor(
            red: CGFloat((rgbValue & 0xFF0000) >> 16) / 255.0,
            green: CGFloat((rgbValue & 0x00FF00) >> 8) / 255.0,
            blue: CGFloat(rgbValue & 0x0000FF) / 255.0,
            alpha: CGFloat(1.0)
        )
    }
}
