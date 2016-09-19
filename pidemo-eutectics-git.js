(function (b) {
	b(document).ready(function () {
		function a(a, d, c) {
			b(emoRange).html(function () {
				return b(this).html().replace(/<br ?\/?>(:|;|=|\^)/ig, "<br> $1").replace(a, " <img src='http://ikhwan15.github.com/eutectics-file/emo3/" + d + ".png' class='emo' title='" + c + "' alt='" + c + "' />")
			})
		}

		emobox && b(pwd).before("<div class='conemo'><span style='display:block;margin-bottom: 10px;'>" + notetext + "</span><span class='emotitle'><span class='emobttn'><span id='showemo'><a class='emo-button' href='javascript:void(0)' onclick='she()' title='Show Emoticon'>Emoticons</a></span><span id='hide-emo'><a class='emo-button' href='javascript:void(0)' onclick='hde()' title='Hide Emoticon Box'>Emoticons</a></span></span></span></div><div id='emoWrap'>" + emocode + "</div>");
		a(/\s&gt;-\)/ig, "1", "&amp;gt;-)");
		a(/\s\(A\)/g, "2", "(A)");
		a(/\s:&lt;/ig, "3", ":&amp;lt;");
		a(/\s\(N\)/g, "4", "(N)");
		a(/\s\(bye\)/g, "5", "(bye)");
		a(/\s\(mp\)/g, "6", "(mp)");
		a(/\s\(clap\)/g, "7", "(clap)");
		a(/\s:s/ig, "8", ":s");
		a(/\sB\)/g, "9", "B)");
		a(/\s\(\^0\^\)/ig, "10", "(^0^)");
		a(/\s8\*\)/ig, "11", "8*)");
		a(/\s}:-\)/ig, "12", "}:-)");
		a(/\s:\?/ig, "13", ":?");
		a(/\sD:/g, "14", "D:");
		a(/\s:X/g, "15", ":X");
		a(/\s\(Y\)/g, "16", "(Y)");
		a(/\s&lt;3/ig, "17", "&amp;lt;3");
		a(/\s:E/g, "18", ":E");
		a(/\s:D/g, "19", ":D");
		a(/\s:b/g, "20", ":b");
		a(/\s8-\|/ig, "21", "8-|");
		a(/\s:-\|/ig, "22", ":-|");
		a(/\s&lt;:o\)/ig, "23", "&amp;lt;:o)");
		a(/\s:\@/ig, "24", ":@");
		a(/\s\?:\|/ig, "25", "?:|");
		a(/\s\^:D/g, "26", "^:D");
		a(/\s:\(/ig, "27", ":(");
		a(/\s:-&gt;/ig, "28", ":-&amp;gt;");
		a(/\s:o/ig, "29", ":o");
		a(/\s\+o\(/ig, "30", "+o(");
		a(/\s:\)/ig, "31", ":)");
		a(/\sxD/g, "32", "xD");
		a(/\s\^.\^/ig, "33", "^.^");
		a(/\s\':-\)/ig, "34", "&amp;#39;:-)");
		a(/\s:\\/ig, "35", ":&#92;");
		a(/\s:p/ig, "36", ":p");
		a(/\s&gt;:-\)/ig, "37", "&amp;gt;:-)");
		a(/\s&gt;\|/ig, "38", "&amp;gt;|");
		a(/\s;\)/ig, "39", ";)");
		a(/\s-\_-/ig, "40", "-_-");
		a(/\s-o-/g, "41", "-o-");
		a(/\s:\|/ig, "42", ":|");
		a(/\s:\$/ig, "43", ":&amp;#36;");
		a(/\s\(hi5\)/g, "44", "(hi5)");
		a(/\s\(\{\)/ig, "45", "({)");
		a(/\s\(\}\)/ig, "46", "(})");
		a(/\s:-\#/ig, "47", ":-#");
		a(/\s\|-\)/ig, "48", "|-) ");
		b(document.body).on("click", function () {
			b(".emoKey").remove()
		});
		b("#emoWrap img.emo").css("cursor", "pointer").on("click", function (a) {
			b(".emoKey").remove();
			b(this).after('<input class="emoKey" type="text" size="6" value=" ' + this.alt + '" />');
			b(".emoKey").trigger("select");
			a.stopPropagation()
		})
	})
})(jQuery);
function she() {
	document.getElementById("emoWrap").style.display = "inline-block";
	document.getElementById("hide-emo").style.display = "inline-block";
	document.getElementById("showemo").style.display = "none"
}
function hde() {
	document.getElementById("emoWrap").style.display = "none";
	document.getElementById("hide-emo").style.display = "none";
	document.getElementById("showemo").style.display = "inline-block"
};