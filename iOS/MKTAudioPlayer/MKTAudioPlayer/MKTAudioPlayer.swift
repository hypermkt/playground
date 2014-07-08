//
//  MKTAudioPlayer.swift
//  MKTAudioPlayer
//
//  Created by usr0600221 on 2014/07/08.
//  Copyright (c) 2014年 hypermkt. All rights reserved.
//

import UIKit
import AVFoundation

class MKTAudioPlayer: UIView {

    var _playerHeight: Float;
    var _playerWidth: Float;
    var _inset: Float;
    
    var audioFilePath: NSString
    var parentViewController: UIViewController
    var isVisible : Bool
    var isBubbleViewVisible: Bool
    var _bubbleView: UIView

    var _audioPlayer: AVAudioPlayer
    var _playPauseButton: UIButton
    
    init() {
        self.audioFilePath = "" as NSString
        self.parentViewController = UIViewController()
        self.isVisible = false // TOOD: とりあえず初期化エラー防止のため。要変更
        self.isBubbleViewVisible = false; // TOOD: とりあえず初期化エラー防止のため。要変更
        self._bubbleView = UIView()
        
        
        self._audioPlayer = AVAudioPlayer()
        self._playPauseButton = UIButton()
    }
    
    func initWithAudioFilePath(audioFilePath: NSString, parentViewController:UIViewController) -> MKTAudioPlayer {
        return self;
    }

    func initWithAudioFilePath(width: CGFloat, height: CGFloat) -> MKTAudioPlayer {
        return self;
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
        var currentPlaybackTime: Double = self._audioPlayer.currentTime
        var currentHours: Int = Int(currentPlaybackTime / 3600)
        var currentMinutes: Int = (Int(currentPlaybackTime)/60)-currentHours*60
        var currentSeconds: Int = (Int(currentPlaybackTime) % 60);
        var currentTimeString: NSString = (currentHours > 0) ?
            "¥(currentHours):¥(currentMinutes):¥(currentSeconds)" :
            "¥(currentMinutes), ¥(currentSeconds)"

        return "¥(currentTimeString) / ¥(durationString)";
    }

    func xPositionFromSliderValue(aSlider: UISlider) -> Float {
        var sliderRange: Float = aSlider.frame.size.width - aSlider.currentThumbImage.size.width;
        var sliderOrigin :Float = aSlider.frame.origin.x + (aSlider.currentThumbImage.size.width / 2.0);
        var sliderValueToPixels: Float = ((aSlider.value-aSlider.minimumValue)/(aSlider.maximumValue-aSlider.minimumValue) * sliderRange) + sliderOrigin;
        return sliderValueToPixels;
    }
}