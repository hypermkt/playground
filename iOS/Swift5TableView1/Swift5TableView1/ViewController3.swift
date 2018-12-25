//
//  ViewController3.swift
//  Swift5TableView1
//
//  Created by hypermkt on 2018/12/25.
//  Copyright © 2018 hypermkt. All rights reserved.
//

import UIKit

class ViewController3: UIViewController {
    
    var count2 = 0

    @IBOutlet var label: UILabel!
    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
        
        label.text = String(count2)
    }
    

    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destination.
        // Pass the selected object to the new view controller.
    }
    */

}
