"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base64 = {
    // private property
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    // public method for encoding
    encode: function (input) {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;
        input = exports.Base64.utf8Encode(input);
        while (i < input.length) {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;
            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            }
            else if (isNaN(chr3)) {
                enc4 = 64;
            }
            output = output +
                exports.Base64._keyStr.charAt(enc1) + exports.Base64._keyStr.charAt(enc2) +
                exports.Base64._keyStr.charAt(enc3) + exports.Base64._keyStr.charAt(enc4);
        }
        return output;
    },
    // private method for UTF-8 encoding
    utf8Encode: function (string) {
        string = string.replace(/\r\n/g, "\n");
        var utfText = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utfText += String.fromCharCode(c);
            }
            else if ((c > 127) && (c < 2048)) {
                utfText += String.fromCharCode((c >> 6) | 192);
                utfText += String.fromCharCode((c & 63) | 128);
            }
            else {
                utfText += String.fromCharCode((c >> 12) | 224);
                utfText += String.fromCharCode(((c >> 6) & 63) | 128);
                utfText += String.fromCharCode((c & 63) | 128);
            }
        }
        return utfText;
    }
};
exports.dispName = [];
exports.profilePic = [];
exports.lastSeenAtTime = [];
exports.groupDetails = [];
function convoDetails(userDetails, groupFeeds) {
    for (var i = 0; i < userDetails.length; i++) {
        if (userDetails[i].displayName)
            exports.dispName[userDetails[i].userId] = userDetails[i].displayName;
        else if (userDetails[i].email)
            exports.dispName[userDetails[i].userId] = userDetails[i].email;
        else
            exports.dispName[userDetails[i].userId] = userDetails[i].userId;
        exports.profilePic[userDetails[i].userId] = "~/images/singleUser.jpg";
        if (userDetails[i].imageLink)
            exports.profilePic[userDetails[i].userId] = userDetails[i].imageLink;
        exports.lastSeenAtTime[userDetails[i].userId] = userDetails[i].lastSeenAtTime;
    }
    console.log(groupFeeds.length);
    for (var i = 0; i < groupFeeds.length; i++)
        exports.groupDetails[groupFeeds[i].id] = groupFeeds[i];
}
exports.convoDetails = convoDetails;
function getTime(timeStamp) {
    if (timeStamp == NaN) {
        return null;
    }
    var when = new Date(timeStamp);
    var now = new Date();
    var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    if ((when.getFullYear() == now.getFullYear()) && (when.getMonth() == now.getMonth()) && (when.getDate() == now.getDate())) {
        var time_1 = when.getHours().toString() + ':' + when.getMinutes().toString();
        return time_1;
    }
    var time = month[when.getMonth()] + ' ' + when.getDate().toString();
    return time;
}
exports.getTime = getTime;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uTGliLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29tbW9uTGliLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQWUsUUFBQSxNQUFNLEdBQUc7SUFDcEIsbUJBQW1CO0lBQ25CLE9BQU8sRUFBRyxtRUFBbUU7SUFFN0UsNkJBQTZCO0lBQzdCLE1BQU0sRUFBRyxVQUFVLEtBQUs7UUFDcEIsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO1FBQzdDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVWLEtBQUssR0FBRyxjQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWpDLE9BQU8sQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUV0QixJQUFJLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzdCLElBQUksR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDN0IsSUFBSSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUU3QixJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQztZQUNqQixJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN2QyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN4QyxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUVqQixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMs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Q0FBQyxTQUFTLElBQUksR0FBRyxDQUFDLENBQUEsQ0FBQztRQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDRCxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMvQixJQUFJLEdBQUcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0lBQ3JCLElBQUksS0FBSyxHQUFHLENBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLENBQUMsQ0FBQztJQUN0RixFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEgsSUFBSSxNQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsRUFBRSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDM0UsTUFBTSxDQUFDLE1BQUksQ0FBQztJQUNkLENBQUM7SUFDRCxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwRSxNQUFNLENBQUMsSUFBSSxDQUFDO0FBQ2QsQ0FBQztBQWJELDBCQWFDIiwic291cmNlc0NvbnRlbnQiOlsiICAgIGV4cG9ydCBsZXQgQmFzZTY0ID0ge1xuICAgIC8vIHByaXZhdGUgcHJvcGVydHlcbiAgICBfa2V5U3RyIDogXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPVwiLFxuXG4gICAgLy8gcHVibGljIG1ldGhvZCBmb3IgZW5jb2RpbmdcbiAgICBlbmNvZGUgOiBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICAgICAgbGV0IG91dHB1dCA9IFwiXCI7XG4gICAgICAgIGxldCBjaHIxLCBjaHIyLCBjaHIzLCBlbmMxLCBlbmMyLCBlbmMzLCBlbmM0O1xuICAgICAgICBsZXQgaSA9IDA7XG5cbiAgICAgICAgaW5wdXQgPSBCYXNlNjQudXRmOEVuY29kZShpbnB1dCk7XG5cbiAgICAgICAgd2hpbGUgKGkgPCBpbnB1dC5sZW5ndGgpIHtcblxuICAgICAgICAgICAgY2hyMSA9IGlucHV0LmNoYXJDb2RlQXQoaSsrKTtcbiAgICAgICAgICAgIGNocjIgPSBpbnB1dC5jaGFyQ29kZUF0KGkrKyk7XG4gICAgICAgICAgICBjaHIzID0gaW5wdXQuY2hhckNvZGVBdChpKyspO1xuXG4gICAgICAgICAgICBlbmMxID0gY2hyMSA+PiAyO1xuICAgICAgICAgICAgZW5jMiA9ICgoY2hyMSAmIDMpIDw8IDQpIHwgKGNocjIgPj4gNCk7XG4gICAgICAgICAgICBlbmMzID0gKChjaHIyICYgMTUpIDw8IDIpIHwgKGNocjMgPj4gNik7XG4gICAgICAgICAgICBlbmM0ID0gY2hyMyAmIDYzO1xuXG4gICAgICAgICAgICBpZiAoaXNOYU4oY2hyMikpIHtcbiAgICAgICAgICAgICAgICBlbmMzID0gZW5jNCA9IDY0O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpc05hTihjaHIzKSkge1xuICAgICAgICAgICAgICAgIGVuYzQgPSA2NDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgb3V0cHV0ID0gb3V0cHV0ICtcbiAgICAgICAgICAgIEJhc2U2NC5fa2V5U3RyLmNoYXJBdChlbmMxKSArIEJhc2U2NC5fa2V5U3RyLmNoYXJBdChlbmMyKSArXG4gICAgICAgICAgICBCYXNlNjQuX2tleVN0ci5jaGFyQXQoZW5jMykgKyBCYXNlNjQuX2tleVN0ci5jaGFyQXQoZW5jNCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfSxcblxuXG4gICAgLy8gcHJpdmF0ZSBtZXRob2QgZm9yIFVURi04IGVuY29kaW5nXG4gICAgdXRmOEVuY29kZSA6IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICAgICAgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoL1xcclxcbi9nLFwiXFxuXCIpO1xuICAgICAgICBsZXQgdXRmVGV4dCA9IFwiXCI7XG5cbiAgICAgICAgZm9yIChsZXQgbiA9IDA7IG4gPCBzdHJpbmcubGVuZ3RoOyBuKyspIHtcblxuICAgICAgICAgICAgbGV0IGMgPSBzdHJpbmcuY2hhckNvZGVBdChuKTtcblxuICAgICAgICAgICAgaWYgKGMgPCAxMjgpIHtcbiAgICAgICAgICAgICAgICB1dGZUZXh0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKChjID4gMTI3KSAmJiAoYyA8IDIwNDgpKSB7XG4gICAgICAgICAgICAgICAgdXRmVGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChjID4+IDYpIHwgMTkyKTtcbiAgICAgICAgICAgICAgICB1dGZUZXh0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGMgJiA2MykgfCAxMjgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdXRmVGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChjID4+IDEyKSB8IDIyNCk7XG4gICAgICAgICAgICAgICAgdXRmVGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgoYyA+PiA2KSAmIDYzKSB8IDEyOCk7XG4gICAgICAgICAgICAgICAgdXRmVGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChjICYgNjMpIHwgMTI4KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHV0ZlRleHQ7XG4gICAgfVxuXG4gIH1cblxuZXhwb3J0IHZhciBkaXNwTmFtZSA9IFtdO1xuZXhwb3J0IHZhciBwcm9maWxlUGljID0gW107XG5leHBvcnQgdmFyIGxhc3RTZWVuQXRUaW1lID0gW107XG5leHBvcnQgdmFyIGdyb3VwRGV0YWlscyA9IFtdO1xuXG5leHBvcnQgZnVuY3Rpb24gY29udm9EZXRhaWxzKHVzZXJEZXRhaWxzLCBncm91cEZlZWRzKXtcbiAgICAgZm9yKGxldCBpPTA7IGk8dXNlckRldGFpbHMubGVuZ3RoOyBpKyspe1xuICAgICAgICBpZih1c2VyRGV0YWlsc1tpXS5kaXNwbGF5TmFtZSlcbiAgICAgICAgICAgIGRpc3BOYW1lW3VzZXJEZXRhaWxzW2ldLnVzZXJJZF0gPSB1c2VyRGV0YWlsc1tpXS5kaXNwbGF5TmFtZTtcbiAgICAgICAgZWxzZSBpZih1c2VyRGV0YWlsc1tpXS5lbWFpbClcbiAgICAgICAgZGlzcE5hbWVbdXNlckRldGFpbHNbaV0udXNlcklkXSA9IHVzZXJEZXRhaWxzW2ldLmVtYWlsO1xuICAgICAgICBlbHNlXG4gICAgICAgIGRpc3BOYW1lW3VzZXJEZXRhaWxzW2ldLnVzZXJJZF0gPSB1c2VyRGV0YWlsc1tpXS51c2VySWQ7XG5cbiAgICAgICAgcHJvZmlsZVBpY1t1c2VyRGV0YWlsc1tpXS51c2VySWRdID0gXCJ+L2ltYWdlcy9zaW5nbGVVc2VyLmpwZ1wiO1xuICAgICAgICBpZih1c2VyRGV0YWlsc1tpXS5pbWFnZUxpbmspXG4gICAgICAgICAgICBwcm9maWxlUGljW3VzZXJEZXRhaWxzW2ldLnVzZXJJZF0gPSB1c2VyRGV0YWlsc1tpXS5pbWFnZUxpbms7XG4gICAgICAgIFxuICAgICAgICBsYXN0U2VlbkF0VGltZVt1c2VyRGV0YWlsc1tpXS51c2VySWRdID0gdXNlckRldGFpbHNbaV0ubGFzdFNlZW5BdFRpbWU7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coZ3JvdXBGZWVkcy5sZW5ndGgpO1xuICAgIGZvcihsZXQgaT0wOyBpPGdyb3VwRmVlZHMubGVuZ3RoOyBpKyspXG4gICAgICAgIGdyb3VwRGV0YWlsc1tncm91cEZlZWRzW2ldLmlkXSA9IGdyb3VwRmVlZHNbaV07IFxuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldFRpbWUodGltZVN0YW1wKSB7XG4gICAgaWYodGltZVN0YW1wID09IE5hTil7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBsZXQgd2hlbiA9IG5ldyBEYXRlKHRpbWVTdGFtcCk7XG4gICAgbGV0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IG1vbnRoID0gW1wiSmFuXCIsXCJGZWJcIixcIk1hclwiLFwiQXByXCIsXCJNYXlcIixcIkp1blwiLFwiSnVsXCIsXCJBdWdcIixcIlNlcFwiLFwiT2N0XCIsXCJOb3ZcIixcIkRlY1wiXTtcbiAgICBpZigod2hlbi5nZXRGdWxsWWVhcigpID09IG5vdy5nZXRGdWxsWWVhcigpKSAmJiAod2hlbi5nZXRNb250aCgpID09IG5vdy5nZXRNb250aCgpKSAmJih3aGVuLmdldERhdGUoKSA9PSBub3cuZ2V0RGF0ZSgpKSkge1xuICAgICAgbGV0IHRpbWUgPSB3aGVuLmdldEhvdXJzKCkudG9TdHJpbmcoKSArICc6JyArIHdoZW4uZ2V0TWludXRlcygpLnRvU3RyaW5nKCk7XG4gICAgICByZXR1cm4gdGltZTtcbiAgICB9XG4gICAgbGV0IHRpbWUgPSBtb250aFt3aGVuLmdldE1vbnRoKCldICsgJyAnICsgd2hlbi5nZXREYXRlKCkudG9TdHJpbmcoKTtcbiAgICByZXR1cm4gdGltZTtcbiAgfSJdfQ==