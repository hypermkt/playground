//
//  DetailViewController.swift
//  TriphSample
//
//  Created by usr0600221 on 2014/12/11.
//
//

import UIKit

class DetailViewController: UIViewController {
    var areaId: Int?
    
    @IBOutlet weak var detailDescriptionLabel: UILabel!


//    var detailItem: AnyObject? {
//        didSet {
//            // Update the view.
//            self.configureView()
//        }
//    }

    func configureView() {
        // Update the user interface for the detail item.
//        if let detail: AnyObject = self.detailItem {
//            if let label = self.detailDescriptionLabel {
//                label.text = detail.description
//            }
//        }
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
//        self.configureView()
        NSLog("areaId: \(areaId)")
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

