class ListNode {
    int val;
    ListNode next;

    ListNode(int x) {
        val = x;
    }
}

class SingleLinkedList {

    static ListNode createLinkedList(int[] arr) {
        if (arr == null || arr.length == 0) {
            return null;
        }
        ListNode head = new ListNode(arr[0]);
        ListNode cur = head;
        for (int i = 1; i < arr.length; i++) {
            cur.next = new ListNode(arr[i]);
            cur = cur.next;
        }
        return head;
    }

    static ListNode printLinkedListVal(int[] arr) {
        ListNode head = createLinkedList(arr);
        for (ListNode p = head; p != null; p = p.next) {
            System.out.println(p.val);
        }
        return head;
    }

    static void addLinkedListHead(int val, ListNode head) {
        ListNode newHead = new ListNode(val);
        newHead.next = head;
        for (ListNode p = newHead; p != null; p = p.next) {
            System.out.println(p.val);
        }
    }

    static void addLinkedListTail(int val, ListNode head) {
        ListNode newTail = new ListNode(val);
        ListNode p = head;
        while (p.next != null) {
            p = p.next;
        }
        p.next = newTail;
    }

    static void insertNode(int val, int pos, ListNode head) {
        ListNode p = head;
        for (int i = 0; i < pos; i++) {
            p = p.next;
        }
        ListNode newNode = new ListNode(val);
        newNode.next = p.next;
        p.next = newNode;
    }

    public static void main(String[] args) {
        int[] arr = new int[] { 1, 2, 3, 4, 5, 6 };
        ListNode head = printLinkedListVal(arr);
        insertNode(100, 5, head);
        System.out.println("/n");
        for (ListNode p = head; p != null; p = p.next) {
            System.out.println(p.val);
        }
    }
}
