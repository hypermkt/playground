//
//  DKAudioPlayerSwiftVersion.swift
//  DKAudioPlayerSwiftVersion
//
//  Copyright (c) 2014年 hypermkt. All rights reserved.
//

import UIKit
import AVFoundation

class DKAudioPlayerSwiftVersion :UIView {

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
        
        self._playerHeight = 0.0
        self._playerWidth = 0.0
        self._inset = 0.0

        self.audioFilePath = "" as NSString
        self.parentViewController = UIViewController()
        self.isVisible = false // TOOD: とりあえず初期化エラー防止のため。要変更
        self.isBubbleViewVisible = false; // TOOD: とりあえず初期化エラー防止のため。要変更
        self._bubbleView = UIView()
        
        
        self._audioPlayer = AVAudioPlayer()
        self._playPauseButton = UIButton()

        var frame: CGRect = CGRectMake(0, 0, 0, 0);
        super.init(frame: frame);
    }

    func initWithAudioFilePath(audioFilePath: NSString, parentViewController:UIViewController) -> DKAudioPlayerSwiftVersion {
        var frame: CGRect = CGRectMake(0, 0, parentViewController.view.bounds.size.width, 75.0)
        
        // selfへの代入はどうする？
        self.initWithAudioFilePath(frame.size.width, height: frame.size.height);
        
        frame.origin.y = parentViewController.view.bounds.size.height;
        self.frame = frame;
        parentViewController.view.addSubview(self);
        parentViewController.view.bringSubviewToFront(self);
        
        return self;
    }

    func initWithAudioFilePath(width: CGFloat, height: CGFloat) -> DKAudioPlayerSwiftVersion {
        if (self) {
            /*
            _audioFilePath = audioFilePath;
            NSAssert(audioFilePath != nil, @"Audio file path cannot be nil");
            
            _playerHeight = frame.size.height;
            _playerWidth = frame.size.width;
            _inset = 15;
            
            NSURL *url = [NSURL fileURLWithPath:audioFilePath];
            NSError *error = nil;
            _audioPlayer = [[AVAudioPlayer alloc] initWithContentsOfURL:url error:&error];
            _audioPlayer.volume = 0.5;
            _audioPlayer.delegate = self;
            NSAssert(error == nil, @"Audio file not found");
            
            [[AVAudioSession sharedInstance] setCategory:AVAudioSessionCategoryPlayback error:nil];
            [[AVAudioSession sharedInstance] setActive: YES error:nil];
            
            long totalPlaybackTime = _audioPlayer.duration;
            int tHours = (int)(totalPlaybackTime / 3600);
            int tMins = (int)((totalPlaybackTime/60) - tHours*60);
            int tSecs = (int)(totalPlaybackTime % 60 );
            _durationString = (tHours > 0) ? [NSString stringWithFormat:@"%i:%02d:%02d", tHours, tMins, tSecs ] : [NSString stringWithFormat:@"%02d:%02d", tMins, tSecs];
            
            _timer = [NSTimer scheduledTimerWithTimeInterval:0.5 target:self selector:@selector(onTimer:) userInfo:nil repeats:YES];
            
            self.clipsToBounds = NO;
            self.autoresizesSubviews = YES;
            self.backgroundColor = [UIColor clearColor];
            
            UIView *backgroundView = [[UIView alloc] initWithFrame:self.bounds];
            backgroundView.backgroundColor = RGB(0xe8e8e8);
            backgroundView.autoresizingMask = UIViewAutoresizingFlexibleWidth;
            [self addSubview:backgroundView];
            
            UIImageView *playerBgImageView = [[UIImageView alloc] initWithImage:[[UIImage imageNamed:@"player_player_bg"] stretchableImageWithLeftCapWidth:5 topCapHeight:5]];
            playerBgImageView.frame = CGRectMake(_inset, _inset, _playerWidth - _inset * 2, _playerHeight - _inset * 2);
            playerBgImageView.autoresizingMask = UIViewAutoresizingFlexibleWidth;
            [self addSubview:playerBgImageView];
            
            _playPauseButton = [UIButton buttonWithType:UIButtonTypeCustom];
            _playPauseButton.autoresizesSubviews = YES;
            _playPauseButton.imageView.contentMode = UIViewContentModeScaleToFill;
            [_playPauseButton setImage:[UIImage imageNamed:@"player_play"] forState:UIControlStateNormal];
            [_playPauseButton setFrame:CGRectMake(_inset, _inset, _playerHeight - 2 * _inset, _playerHeight - 2 * _inset)];
            [_playPauseButton addTarget:self action:@selector(playOrPause) forControlEvents:UIControlEventTouchUpInside];
            [self addSubview:_playPauseButton];
            
            float originY = _playerHeight / 2.0 - 34 / 2;
            float originX = _playPauseButton.frame.origin.x + _playPauseButton.frame.size.width + _inset;
            CGRect sliderFrame = CGRectMake(originX, originY, frame.size.width - originX - _inset * 2, 34);
            _slider = [[UISlider alloc] initWithFrame:sliderFrame];
            _slider.autoresizingMask = UIViewAutoresizingFlexibleWidth;
            if ( ! IS_IOS7_OR_HIGHER ) {
                [_slider setMaximumTrackImage:[[UIImage imageNamed:@"player_progress_bg"] resizableImageWithCapInsets:UIEdgeInsetsMake(0, 10, 0, 10)]  forState:UIControlStateNormal];
                [_slider setMinimumTrackImage:[[UIImage imageNamed:@"player_progress_blue"] resizableImageWithCapInsets:UIEdgeInsetsMake(0, 10, 0, 10)]  forState:UIControlStateNormal];
            }
            [_slider setThumbImage:[UIImage imageNamed:@"player_circle"] forState:UIControlStateNormal];
            _slider.minimumValue = 0.0;
            _slider.maximumValue = _audioPlayer.duration;
            [_slider addTarget:self action:@selector(sliderChanged:) forControlEvents:UIControlEventValueChanged];
            [self addSubview:_slider];
            
            _bubbleView = [[UIView alloc] initWithFrame:CGRectMake(160, _slider.frame.origin.y - 46 + _slider.frame.size.height / 2, 72, 46)];
            _bubbleView.backgroundColor = [UIColor clearColor];
            _bubbleView.frame = [self createCurrentPositionFrame];
            UIImageView *bubbleImageView = [[UIImageView alloc] initWithImage:[UIImage imageNamed:@"player_bubble"]];
            bubbleImageView.contentMode = UIViewContentModeScaleToFill;
            bubbleImageView.frame = _bubbleView.bounds;
            [_bubbleView addSubview:bubbleImageView];
            _timeLabel = [[UILabel alloc] initWithFrame:CGRectMake(0, 10, 72, 11)];
            _timeLabel.backgroundColor = [UIColor clearColor];
            _timeLabel.textAlignment = NSTextAlignmentCenter;
            _timeLabel.font = [UIFont fontWithName:@"HelveticaNeue" size:10];
            _timeLabel.text = [self calculateCurrentDuration];
            [_bubbleView addSubview:_timeLabel];
            
            _bubbleView.hidden = YES;
            [self addSubview:_bubbleView];
            
            self.autoresizingMask = UIViewAutoresizingFlexibleWidth | UIViewAutoresizingFlexibleTopMargin;
        */
        }

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
