var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _LinkedList_root, _LinkedList_tail, _LinkedList_length;
var ListNode = /** @class */ (function () {
    function ListNode(value) {
        this.value = value;
    }
    return ListNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        _LinkedList_root.set(this, void 0);
        _LinkedList_tail.set(this, void 0);
        _LinkedList_length.set(this, 0);
    }
    LinkedList.prototype.add = function (value) {
        var _a;
        var node = new ListNode(value);
        if (!__classPrivateFieldGet(this, _LinkedList_root, "f") || !__classPrivateFieldGet(this, _LinkedList_tail, "f")) {
            __classPrivateFieldSet(this, _LinkedList_root, node, "f");
            __classPrivateFieldSet(this, _LinkedList_tail, node, "f");
        }
        else {
            __classPrivateFieldGet(this, _LinkedList_tail, "f").next = node;
            __classPrivateFieldSet(this, _LinkedList_tail, node, "f");
        }
        __classPrivateFieldSet(this, _LinkedList_length, (_a = __classPrivateFieldGet(this, _LinkedList_length, "f"), _a++, _a), "f");
    };
    Object.defineProperty(LinkedList.prototype, "length", {
        get: function () {
            return __classPrivateFieldGet(this, _LinkedList_length, "f");
        },
        enumerable: false,
        configurable: true
    });
    LinkedList.prototype.print = function () {
        var current = __classPrivateFieldGet(this, _LinkedList_root, "f");
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    };
    return LinkedList;
}());
_LinkedList_root = new WeakMap(), _LinkedList_tail = new WeakMap(), _LinkedList_length = new WeakMap();
var numberList = new LinkedList();
var nameList = new LinkedList();
nameList.add('pumbah');
nameList.add('svelte');
nameList.add('sumbul');
nameList.add('kay cenat');
console.log("Length of the name list: ".concat(nameList.length, " \uD83E\uDD7A"));
nameList.print();
