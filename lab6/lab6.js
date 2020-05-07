/*
1.
背景：
    每隔五秒运行一次函数直到某一整分钟停止，比如从20:55:45运行到20:56:00停止；
    或者运行10次，先到的为准。从1开始每过五秒，输入框内数值翻倍。初始值为1。
注意：
    你可以在函数 timeTest内部 和 timeTest外部 写代码使得该功能实现。
要求：
    ①要求使用JS闭包的方式使得计数实现局部私有，不可以在全局区域声明计数变量。
    ②使用console.log打印计数即可，到达一分钟提前停止也需要console.log相应的提示语句。
*/

let run = (function () {
    let number = 1;
    let n = 0;
    let startTime;
    return function () {
        if (n === 0) {
            startTime = new Date().getSeconds();
        }
        return [n++, number *= 2, startTime];
    }
})();
let seconds = (function () {
    let seconds = 0;
    return function () {
        return ++seconds;
    }
})();

let interval;

function runTime() {
    let time = new Date();
    let sec = seconds();
    if (time.getSeconds() !== 0 && sec % 5 === 0) {
        let information = run();
        let n = information[0];
        let number = information[1];
        if (n < 10) {
            console.log(number);
        } else {
            console.log("Stop");
            clearInterval(interval);
        }
    } else if (time.getSeconds() === 0) {
        console.log("Stop");
        clearInterval(interval);
    }
}

function testTime() {
    console.log(1);
    interval = setInterval("runTime()", 1000);
}

//运行函数
// testTime();


/*
2.
要求：
    ①能够对传入的、移动手机电话（11位）、邮箱字符串（上网查找其要求）进行正则判定。
    ②使用console.log打印即可，例如，电话不符合要求但是邮箱符合要求，则console.log("The telephone is right and the mail is wrong!")。
    ③邮箱字符串的正则匹配的理解需写入lab文档。
    ④telephone与mail均是字符串。
*/
function testMail(telephone, mail) {
    let tel = /^1\d{10}$/;
    let mai = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    if (tel.test(telephone) && mai.test(mail)) {
        console.log("All right");
    } else {
        if (tel.test(telephone)) {
            console.log("The telephone is right and the mail is wrong!");
        } else if (mai.test(mail)) {
            console.log("The telephone is wrong and the mail is right!");
        } else {
            console.log("All wrong");
        }
    }
}

//测试
// testMail("17776598209","564844088@qq.com");


/*
3.
要求：
    ①输入一段全英文语句，要求使用正则表达式找到相邻的重复单词放入一个Set，如果集合中元素超过10个，则按照首字母顺序取前10个于集合。
    ②使用console.log打印即可，将该集合打印出来。
    ③例如：输入"Is is the iS is cost of of gasoline going up up"，输出：Set { 'Is is', 'iS is', 'of of', 'up up' }。
    ④对该函数中用的正则匹配的理解需写入lab文档。
    ⑤str为字符串。
*/
function testRedundancy(str) {
    let s = str.toUpperCase();
    let arr1 = s.split(" ");
    let arr2 = str.split(" ");
    let arr = [];
    for (let i = 0; i < arr1.length - 1; i++) {
        for (let j = i + 1; j < arr1.length; j++) {
            if (arr1[i].match(arr1[j])) {
                if (j === i + 1) {
                    arr.push(arr2[i] + " " + arr2[j]);
                } else {
                    arr[arr.length - 1] += " " + arr2[j];
                }
            } else {
                break;
            }
        }
    }
    if (arr.length > 10) {
        arr.sort(function (a, b) {
            if (a.toUpperCase() < b.toUpperCase())
                return -1;
        });
        arr.splice(10);
    }
    let set = new Set(arr);
    console.log(set);
}

// testRedundancy("a a b b b b d d d d g f g g s s s t t t Z z r r u u p p q q ");

/*
4.
背景：
    旧键盘上坏了几个键，于是在敲一段文字的时候，对应的字符就不会出现。
    现在给出应该输入的一段文字、以及实际被输入的文字，请你使用Set列出肯定坏掉的那些键。
    例如：输入7_This_is_a_test和_hs_s_a_es    输出：Set { '7', 'T', 'I' }
要求：
    ①需要使用Set。
    ②只能使用一次循环。
    ③使用console.log打印即可，将该集合打印出来。
    ④wantInput和actualInput为字符串。
注意：
    ①注意联系生活，并注意观察我给的上述例子。
*/
function testKeyBoard(wantInput, actualInput) {
    let set = new Set();
    wantInput = wantInput.toUpperCase();
    actualInput = actualInput.toUpperCase();
    for (let i = 0, j = 0; i < wantInput.length, j < actualInput.length; i++, j++) {
        if (wantInput[i] !== actualInput[j]) {
            j--;
            set.add(wantInput[i]);
        }
    }
    console.log(set);
}

// testKeyBoard("7_This_is_a_test和_hs_s_a_es", "_hs_s_a_es");

/*
5.
背景：
    给定一个输入英文语句字符串，反转该语句。例如the sky is blue变成blue is sky the。
要求：
    ①如果输入的字符串前后有空格，输出中应该去除前后空格。如果输入字符串中间出现连续的两个空格，输出应该变为一个。
    比如输入是“  hello  world!  ”，输出应该是“world! hello”。
    ②请使用Array。
    ③使用console.log打印即可，将该字符串打印出来。
    ④只能显式使用一次循环。
    ⑤str为字符串。
*/
function testSpecialReverse(str) {
    function deleteBlank(s) {
        s = s.replace(/(^\s*)|(\s*$)/g, "");
        s = s.replace(/\s+/g, " ");
        return s;
    }

    str = deleteBlank(str);
    let arr = str.split(" ").reverse();
    let newStr = "";
    for (let i = 0; i < arr.length; i++) {
        if (i === 0)
            newStr = arr[i];
        else
            newStr = newStr + " " + arr[i];
    }
    console.log(newStr);
}

// testSpecialReverse("   the   sky    is     blue   ");

/*
6.
背景：
    给定一个整数数组和一个值，找出相加为该值的两个元素下标并保存在一个数组中。
    例如给定 [2, 7, 11, 15]和9,
    打印结果为[0,1]
要求：
    ①使用Map。
    ②只能显式使用一次循环。
    ③使用console.log打印即可，将满足条件的数组打印出来。
    ④nums为数字数组，如[1,2,3,4],target为数字,如5，那么输出为
    [ 0, 3 ]
    [ 1, 2 ]
*/

function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let surplus = target - nums[i];
        let other = nums.slice(i + 1).indexOf(surplus);
        if (other !== -1) {
            let arr = [i, i + 1 + other]
            console.log(arr);
        }
    }
}

// twoSum([1, 2, 3, 4, 3, 2, 4, 4], 5);


/*
7.
背景：
    打印最长的包含不同字符串的子字符串长度。
要求：
    ①使用Map。
    ②例如：输入"abbbbb",输出2，输入"bbbbb",输出1；
    ③只能显式使用一次循环。
    ④使用console.log打印即可。
    ⑤str为字符串。
*/
function lengthOfLongestSubstring(str) {
    let max = 0;
    let s = "";
    for (let i = 0; i < str.length; i++) {
        let index = s.indexOf(str[i]);
        if (index === -1) {
            s += str[i];
            max = s.length > max ? s.length : max;
        } else {
            s = s.substr(index + 1) + str[i];
        }
    }
    console.log(max);
}

// lengthOfLongestSubstring("abcasfsfadaseqweqwesadsaddfa");

/*
8.
背景：
    该部分只是为了让你们自己动动手更好地感受不同继承方式。
要求：
    ①借助构造函数、原型链、和Object.create分别编写DevelopingCountry、PoorCountry、DevelopedCountry以实现对Country的继承，
    并在三者分别添加sayHi、saySad、sayHappy函数分别打印"Hi,i am a developing country."、"I am a sad poor country."、"I am a Happy developed country."
    ②请调用他们并打印相关语句即可。
*/
function Country() {
    this.name = "国家";
}

function DevelopingCountry() {
    Country.apply(this, arguments);
    this.sayHi = function () {
        console.log("Hi,i am a developing country.");
    }
}

function PoorCountry() {}
PoorCountry.prototype = new Country();
PoorCountry.prototype.saySad = function () {
    console.log("I am a sad poor country.");
}

function DevelopedCountry() {
    this.sayHappy = function () {
        console.log("I am a Happy developed country.");
    }
}

DevelopedCountry.prototype = Object.create(Country);

var developingCountry = new DevelopingCountry();
var poorCountry = new PoorCountry();
var developedCountry = new DevelopedCountry();
developingCountry.sayHi();
poorCountry.saySad();
developedCountry.sayHappy();
