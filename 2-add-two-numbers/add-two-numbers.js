/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const val = (n1, n2, rest = 0) => {
        if (!n1 && !n2 && !rest) return null;

        const val1 = n1 ? n1.val : 0;
        const val2 = n2 ? n2.val : 0;
        const newVal = val1 + val2 + rest;

        const nextNode = val(n1 ? n1.next : null, n2 ? n2.next : null, Math.floor(newVal / 10));
        return new ListNode(newVal % 10, nextNode);
    };

    return val(l1, l2);
};