/// <reference path="DoubleLinkedList.ts" />

import List = DoubleLinkedList.List;

module Main {
    var list = new List<string>();
    console.log("Number of Elements: " + list.size());
    console.log("Push twice.");
    list.pushFront("Alejandro");
    list.pushBack("Carlstein");
    console.log("Number of Elements: " + list.size());
    console.log("Front: " + list.getFront());
    console.log("Back: " + list.getBack());
    console.log("PopFront:" + list.popFront());
    console.log("Number of Elements: " + list.size());
    console.log("PopBack: " + list.popBack());
    console.log("Number of Elements: " + list.size());
}