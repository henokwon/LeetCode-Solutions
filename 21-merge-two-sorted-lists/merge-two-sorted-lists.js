/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {

    let y = new ListNode();
    let x = y;


    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            x.next = list1;
            list1 = list1.next;
        } else {
            x.next = list2;
            list2 = list2.next;
        }
        x = x.next;
    }


    if (list1 !== null) {
        x.next = list1;
    } else {
        x.next = list2;
    }

    return y.next;
};