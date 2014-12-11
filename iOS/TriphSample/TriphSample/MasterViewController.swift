//
//  MasterViewController.swift
//  TriphSample
//
//  Created by usr0600221 on 2014/12/11.
//
//

import UIKit

class MasterViewController: UITableViewController {

    var objects = NSMutableArray()
    // TODO: plistから取得する
    let areas = ["浅草", "渋谷"]
    let images = ["apache", "homebrew"]

    @IBOutlet var areaTableView: UITableView!

    override func awakeFromNib() {
        super.awakeFromNib()
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        
        // Do any additional setup after loading the view, typically from a nib.
//        self.navigationItem.leftBarButtonItem = self.editButtonItem()
//
//        let addButton = UIBarButtonItem(barButtonSystemItem: .Add, target: self, action: "insertNewObject:")
//        self.navigationItem.rightBarButtonItem = addButton
        self.areaTableView.registerNib(UINib(nibName: "AreaCell", bundle: nil), forCellReuseIdentifier: "AreaCell")
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

//    func insertNewObject(sender: AnyObject) {
//        objects.insertObject(NSDate(), atIndex: 0)
//        let indexPath = NSIndexPath(forRow: 0, inSection: 0)
//        self.tableView.insertRowsAtIndexPaths([indexPath], withRowAnimation: .Automatic)
//    }

    // MARK: - Segues

    override func prepareForSegue(segue: UIStoryboardSegue, sender: AnyObject?) {
        NSLog("selectedAreaId: \(self.tableView.indexPathForSelectedRow()?.row)")
        if segue.identifier == "showDetail" {
            let detailViewController: DetailViewController = segue.destinationViewController as DetailViewController
            detailViewController.areaId = self.tableView.indexPathForSelectedRow()?.row
//            if let indexPath = self.tableView.indexPathForSelectedRow() {
//                let object = objects[indexPath.row] as NSDate
//            (segue.destinationViewController as DetailViewController).detailItem = object
//            }
        }
    }

    // MARK: - Table View

    override func numberOfSectionsInTableView(tableView: UITableView) -> Int {
        return 1
    }

    override func tableView(tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return areas.count
    }

    override func tableView(tableView: UITableView, cellForRowAtIndexPath indexPath: NSIndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCellWithIdentifier("AreaCell", forIndexPath: indexPath) as AreaCell
//        let object = areas[indexPath.row] as NSDate
//        cell.textLabel!.text = object.description
//        cell.textLabel!.text = areas[indexPath.row]
        cell.areaName.text = areas[indexPath.row]
        cell.areaImage.image = UIImage(named: images[indexPath.row])
        return cell
    }
    
    override func tableView(tableView: UITableView, heightForRowAtIndexPath indexPath: NSIndexPath) -> CGFloat {
        return 100
    }

//    override func tableView(tableView: UITableView, canEditRowAtIndexPath indexPath: NSIndexPath) -> Bool {
//        // Return false if you do not want the specified item to be editable.
//        return true
//    }

//    override func tableView(tableView: UITableView, commitEditingStyle editingStyle: UITableViewCellEditingStyle, forRowAtIndexPath indexPath: NSIndexPath) {
//        if editingStyle == .Delete {
//            objects.removeObjectAtIndex(indexPath.row)
//            tableView.deleteRowsAtIndexPaths([indexPath], withRowAnimation: .Fade)
//        } else if editingStyle == .Insert {
//            // Create a new instance of the appropriate class, insert it into the array, and add a new row to the table view.
//        }
//    }


}

