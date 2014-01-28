var tumblr={resources:{}},accessProperty,pluralize;accessProperty=function(a,b){for(var c=b.split(".");c.length&&(a=a[c.shift()]););return"undefined"==typeof a&&console.warn('Undefined property path "'+b+'", object: ',a),a},pluralize=function(a){var b=["womyn","wymyn"];return-1!==b.indexOf(a)?a:-1!==a.search(/man$/gi)?a.replace(/man$/,"men"):-1!==a.search(/y$/gi)?a.slice(0,a.length-1)+"ies":-1!==a.search(/[xs]$/gi)?a+"es":a+"s"},Array.prototype.random=function(a){return _.sample(this,a)},String.prototype.randomRepeat=function(a,b){return b="undefined"==typeof b?1:b,new Array(Math.floor(Math.random()*(a-b+1)+b)+1).join(this)},String.prototype.tumblrize=function(a){var b=this;return"undefined"==typeof a&&(a=!1),b=b.replace(/\band\b/g,"&"),a&&(b=b.replace(/you're/g,"ur"),b=b.replace(/you/g,"u"),b=b.replace(/people/g,"ppl"),b=b.replace(/\bare\b/g,"r"),b=b.replace(/\bplease\b/g,"plz"),b=b.replace(/\bhate\b/g,"h8"),b=b.replace(/\bto\b/g,"2"),b=b.replace(/\bthe\b/g,function(){return Math.random()>.3?"the":"teh"}),b=b.replace(/eist/g,"iest"),b=b.replace(/'/g,""),b=b.replace(/\b /g,function(){return Math.random()>.03?" ":[", ",". "].random()})),b=b.replace(/(.+?)([\!\?])/gi,function(b,c,d){if(Math.random()>.6)return b;if(c=c.trim(),a){var e,f=Math.floor(Math.random()*c.length/2);return c=c.slice(0,f)+c.slice(f,c.length).toUpperCase(),c+=d,Math.random()>.8&&(e="~".randomRepeat(5),Math.random()>.3&&(e+="*"),c=e+c+e.split("").reverse().join("")),Math.random()>.75&&(c+=" "+tumblr.resources.emoji.random())," "+c}return b.toUpperCase()}),b=b.replace(/([\!\?]+)/g,function(a,b){return b.slice(0,1).randomRepeat(8,3)}),b.toString()},String.prototype.replaceTerms=function(){var a,b,c=/\{([a-z\.\|]+)(:([0-9]+))?(\?([0-9]+))?(\#([a-z]+))?\}/gi,d=this,e=0;for(d=d.replace(/\[(.+?)\]/gi,function(a,b){return b=b.split("|"),1===b.length&&b.push(""),b.random()});-1!==d.search(c)&&5>e;)a={},b={},_.forEach(d.match(c),function(b){var c=b.match(/[a-z\.\|]+/i)[0],d=/\?([0-9]+)/gi.exec(b),e=1;d&&(e+=d[1]),a.hasOwnProperty(c)?a[c]+=e:a[c]=e}),_.forEach(a,function(a,c){var d=accessProperty(tumblr.resources,c.split("|").random());b[c]=_.sample(d,a)}),d=d.replace(c,function(a,c,d,e,f,g,h,i){g=g?Math.floor(Math.random()*g)+1:1;var j,k=b[c].splice(0,g);return k.length>1&&(j=k.pop(),k=[k.join(", ")+" and "+j]),k=k[0],"undefined"==typeof k&&(k=accessProperty(tumblr.resources,c).random()),"undefined"!=typeof e&&e||(e=1),"object"==typeof k&&(k=k[e]),"undefined"!=typeof i&&window.hasOwnProperty(i)&&(k=window[i](k)),k}),e+=1;return d=d.replace(/\ba ([aeiouy])/gi,function(a,b){return"an "+b}),d.toString()};var tumblrPrePostfixer=function(a,b,c){var d=[];return"undefined"==typeof c&&(c=" "),_.forEach(a,function(a){_.forEach(b,function(b){d.push(a+c+b)})}),d};tumblr.resources.alignments=tumblrPrePostfixer(["andro","anthro","demi","gender","gyne","pomo","skolio","tulpa"],["amorous","romantic","sensual","sexual"],"").concat(tumblrPrePostfixer(["a","bi","demi","inter","multi","non","omni","pan","para","poly","trans"],["ethnic","gender","queer","racial","romantic","sensual","sexual","species"],"")),tumblr.resources.privileged={nouns:["able-body","binary","cis","cisgender","cishet","gender","hetero","male","middle-class","non-ethnic","smallfat","thin","uterus-bearer","white","white womyn"],adjectives:["normative","elitist","overprivileged","privileged"]},tumblr.resources.discriminations=tumblrPrePostfixer(["appearance","attractiveness","height","weight"],["discrimination","obsession","oppression"]),tumblr.resources.supremacies=tumblrPrePostfixer(tumblr.resources.privileged.nouns,["culture","domination","entitlement","feminism","kyriarchy","opinions","privilege","rights","superiority","supremacy"]),tumblr.resources.institutions=tumblrPrePostfixer(["institutionalized","internalized"],["gender roles","masculinity","misogynism","patriarchy","racism"]),tumblr.resources.concepts={awesome:["activism","anti-porn activism","bodily integrity","body hair","color","communism","diversity","dysphoria","egalitarianism","estrogen-affinity","ethnicity","fandomism","fat love","fatism","female rights","female superiority","female supremacy","femininity","feminism","food addiction","freeganism","gender abolition","gender neutrality","gender-neutral pronouns","intersectionality","invisibility","lesbianism","misandry","multiplicity","obesity","prosthetic-wearers","social justice","socialism","stretchmark","veganism","vegetarianism"],terrible:["TERFism","bindi wearing","colonization","cultural appropriation","exotification","female self esteem erosion","gender equality","gender roles","hypermasculinity","labeling","masculinity","men's rights","patriarchal beauty standards","rape culture","sexuality labels"].concat(tumblr.resources.discriminations,tumblr.resources.supremacies,tumblr.resources.institutions)},tumblr.resources.conclusions=["in conclusion:","tl;dr","to summarize:"],tumblr.resources.emoji=["(◕﹏◕✿)","（　｀ー´）","(•﹏•)","└(｀0´)┘","ᕙ(⇀‸↼‶)ᕗ","ᕦ(ò_óˇ)ᕤ","(⋋▂⋌)","(¬_¬)","٩(×̯×)۶","(╯°□°)╯︵ ┻━┻","(⊙﹏⊙✿)","(ﾉ◕ヮ◕)ﾉ*: ･ﾟ✧","(⊙_◎)"],tumblr.resources.genders=[],tumblr.resources.images={backgrounds:["1.gif","5.gif","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg"],inline:["1.gif","2.gif","3.gif","4.gif","5.gif","6.gif","7.gif","8.gif","9.gif","1.png","2.png","1.jpg","2.jpg"]},tumblr.resources.insults={statements:["acknowledge your {privileged.nouns} privilege","burn in hell","check your {privileged.nouns} privilege","choke on a bag of dicks","die in a ditch","die in a fire","drink bleach","drop dead","fuck off","fuck you","get bent","get fucked with a cactus","go drown in your own piss","go fuck yourself","go play in traffic","go to hell","kill yourself","light yourself on fire","make love to yourself in a furnace","rot in hell","screw you","shut the fuck up","shut up"],adjectives:["antediluvian","awful","body-shaming","chauvinistic","ciscentric","close-minded","deluded","entitled","fucking","goddamn","heteropatriarchal","ignorant","inconsiderate","insensitive","intolerant","judgmental","misogynistic","nphobic","oppressive","pathetic","patriarchal","racist","rape-culture-supporting","worthless"].concat(tumblr.resources.phobias),nouns:["MRA","TERF","ableist","ageist","anti-feminist","asshole","assimilationist","basement dweller","bigot","binarist","brogrammer","carnist","chauvinist","cissexist","classist","creep","dudebro","essentialist","fascist","feminazi","femscum","hitler","kyriarchist","loser","lowlife","misogynist","mouthbreather","nazi","neckbeard","oppressor","patriarchist","pedophile","piece of shit","radscum","rape-apologist","rapist","redditor","scum","sexist","shit stain","singletist","subhuman","traditionalist","transmisogynist","troll","truscum","virgin"]},tumblr.resources.intros=["[TW: rant]","[TW: words]","can we talk about this?","first off:","for the love of god.","i'm going to get hate for this but","just a friendly reminder:","let me make this abundantly clear:","no. just no.","oh. my. god.","omg","please stop.","seriously?","this. is. NOT. okay.","wow. just. wow."],tumblr.resources.rawKins=["cat","demon","dog","dolphin","dragon","fox","goat","other","poly","rabbit","wolf"],tumblr.resources.kins=tumblrPrePostfixer(tumblr.resources.rawKins,["kin"],""),tumblr.resources.marginalized={verbs:[["abuse","abusing","abuse"],["attack","attacking","attacking"],["dehumanize","dehumanizing","dehumanization"],["deny","denying","denial"],["discriminate","discriminating","discrimination"],["erase","erasing","erasure"],["exotify","exotifying","exotification"],["exploit","exploiting","exploitation"],["fetishize","fetishizing","fetishization"],["harass","harassing","harassment"],["hypersexualize","hypersexualizing","hypersexualization"],["ignore","ignoring","ignoring"],["kinkshame","kinkshaming","kinkshaming"],["marginalize","marginalizing","marginalization"],["misgender","misgendering","misgendering"],["objectify","objectifying","objectification"],["oppress","oppressing","oppression"],["sexualize","sexualizing","sexualization"],["shame","shaming","shaming"],["stare-rape","stare-raping","stare-raping"]],nouns:["CAFAB","CAMAB","PoC","QTPOC","WoC","ace","agnostic","ally","amputee","atheist","cross-dresser","equalist","fatty","female","feminist","freeganist","furry","headmate","little person","minority","native american","princex","radfem","survivor","transman","transnormative","transwoman","vegan","vegetarian","victim","womyn","wymyn"].concat(tumblr.resources.kins),adjectives:["LGBTQIAP+","androgyne","androphile","asian","bear","bi","black","celestial","chubby","closet","curvy","dandy-femme","deathfat","demi","differently abled","disabled","ethnic","fat","femme","freebleeding","genderfluid","genderfuck","genderless","genderqueer","graysexual","gynephile","hijra","intersexual","latin@","metrosexual","multigender","non-gender","non-white","queer","skinny","smallfat","therian","thin","third-gender","trans*","transabled","two-spirit","underprivileged"].concat(tumblr.resources.alignments)},tumblr.resources.individuals=["individuals","people","personalities","spirits"].concat(_.map(tumblr.resources.marginalized.nouns,pluralize)),tumblr.resources.personalities=tumblrPrePostfixer(["aligned","associating","identifying","type","supporting"],tumblr.resources.individuals),tumblr.resources.phobias=tumblrPrePostfixer(["bi","curvy","deathfat","ethno","fat","femme","furry","hetero","homo","lesbo","male","otherkin","phallo","poly","queer","trans*","womyn"],["phobic"],""),tumblr.resources.activism=tumblrPrePostfixer(["anti-porn","anti-feminism","body-positivity","environmental","fat rights","gay rights","gay","lesbian","men's rights","social justice","trans*","animal rights"],["activist","separatist","warrior"]),tumblr.resources.ists=tumblrPrePostfixer(["","cyber","gay","lesbian","liberal","radical","sex-positive","male","intersectional"],["agnostic","atheist","communist","egalitarianist","equalist","feminist","leftist","liberationist","masculinist","misandrist","nihilist","nationalist","socialist","womanist"]),tumblr.resources.politics={nouns:["anti-SJW","conservative","democrat","dyke","freedom fighter","freegan","liberal","libertarian","misanthrope","pro-choice","pro-life","republican","vegan","women's liberationist","zapatista"].concat(tumblr.resources.activism,tumblr.resources.ists)},tumblr.resources.presentations=["fighting {concepts.terrible} / fighting {concepts.terrible} / fighting {concepts.terrible}","i am fighting against {concepts.terrible} and {privileged.nouns} privileges","i am fighting for {concepts.awesome} and {marginalized.nouns} rights","i am part {rawKins}kin/{rawKins}kin with some {rawKins} traits","i blog about {concepts.awesome?5}","i identify as a {marginalized.nouns} spirit","if you think {concepts.terrible} is a good thing {insults.statements}","if you're a {insults.nouns} {insults.statements}","my pronuns are {joinedPronouns} or {joinedPronouns}","my triggers include {triggers?4}","please don't talk to me about {concepts.terrible?3}, it's incredibly triggering to me"],tumblr.resources.pronouns=[["ey","em","eir"],["tho","thong","thors"],["hu","hum","hus"],["thon","thon","thons"],["jee","jem","jeir"],["ve","ver","vis"],["xe","xem","xyr"],["ze","zir","zes"],["ze","hir","hir"],["ze","mer","zer"],["zhe","zhim","zher"]],tumblr.resources.joinedPronouns=function(){var a=[];return _.forEach(tumblr.resources.pronouns,function(b){a.push(b.join("/"))}),a}(),tumblr.resources.revolutions=function(){var a=[],b=["aceo","black","chubby","curvy","deathfat","demi","diversity","dysphoria","ethnicity","fandom","fat","fatty","fem","furry","height","homo","latin","lesb","queer","skinny","trans","womyn","wymyn"];return _.forEach(b,function(b){-1===b.slice(-1).search(/[aeiouy]/)&&(b+="o"),a.push((b+"lution").toUpperCase())}),a}(),tumblr.resources.statementToldYouTo=["how can it be so fucking difficult to","how fucking difficult is it to just","how is it so difficult to","how often do I have to tell you to","i've already told you to","i've repeatedly told you to","is it so fucking difficult to","why can't you just","why is it so hard for you to","you should"],tumblr.resources.statements=[['[currently|right now|today|this week|this month] i\'m [literally] [{alignments}|a {kins}], so [fucking] address me as "{joinedPronouns}" and not "{joinedPronouns}"!',!0],["[fuck|screw] [everything about] {concepts.terrible?2}!",!1],["[fuck|screw] your [fucking|goddamn|] {concepts.terrible}!",!0],["[fuck|screw] your {marginalized.verbs:2} of {marginalized.adjectives?3} {individuals}!",!1],["[people|{insults.adjectives} {insults.nouns#pluralize}] like you deserve to [fucking] die!",!0],["[{statementToldYouTo}] [accept|acknowledge|respect] that i'm [literally] [{alignments}|a {kins}] [today|this week|this month]!",!0],['[{statementToldYouTo}] [respect that|accept that|acknowledge that|] my pronouns are "{joinedPronouns}"!',!0],["[{statementToldYouTo}] [show some respect for|accept|respect|acknowledge] {concepts.awesome?2}!",!0],['[{statementToldYouTo}] address me as "{joinedPronouns}"!',!0],["[{statementToldYouTo}] leave {marginalized.adjectives} {individuals} [the fuck] alone!",!0],["[{statementToldYouTo}] [stop|quit] [offending|tone policing|triggering] me!",!0],["[{statementToldYouTo}] [stop|quit] {marginalized.verbs:1} {marginalized.adjectives?3} {individuals}!",!0],["[{statementToldYouTo}] [stop|quit] {marginalized.verbs:1} {marginalized.adjectives?3} {individuals}!",!0],["all {insults.adjectives} {insults.nouns#pluralize} can [fucking] [go to|burn] in hell!",!1],["consensual sex is [still] [fucking] rape!",!0],["don't mention [fucking] {triggers}, it's [incredibly|terribly|really|literally|] triggering [to] me!",!1],["don't you see [that|how] {marginalized.verbs:1} {marginalized.adjectives?3} {individuals} is problematic?",!0],["get off my [fucking|goddamn|damn|] case or i'll [literally] report you for [harassment|{marginalized.verbs:2} of {marginalized.adjectives?2} {individuals}]!",!1],["i [literally] don't need your [fucking|goddamn|worthless] advice!",!0],["i [literally] hope you [fucking] [die|die in a fire|bleed to death]!",!0],["i [literally] hope your [fucking] asshole prolapses!",!0],["i can't even.",!1],["i'm [literally] 100% done.",!1],["i'm [literally] crying right now!",!0],["it's [literally] not my [fucking|goddamn|damn|] job to educate you!",!0],["no one cares about your [fucking|goddamn|damn|] {insults.nouns} {privileged.nouns} opinion!",!0],["oh my [fucking] god!",!1],["what the [fuck|hell] do you have against {concepts.awesome?2}?",!0],["why [the fuck|the hell|] do you [feel the need to] {marginalized.verbs:0} {marginalized.adjectives?3} {individuals}?",!1],["why [the fuck|the hell|] should i [accept|respect|acknowledge] your [fucking|goddamn|damn|{insults.adjectives}|] {insults.nouns} opinion?",!1],["you [literally] make me [fucking] sick!",!1],["you can be a {marginalized.adjectives} {marginalized.nouns} and still have [some] {privileged.nouns} [fucking] privilege!",!1],["you should be [fucking] ashamed of yourself!",!0],["you should [stop|quit] {marginalized.verbs:1} {marginalized.adjectives?3} {individuals}!",!0],["you'll [literally] never understand my [fucking|goddamn|damn|] {marginalized.adjectives} {marginalized.nouns} [struggles|issues]!",!1],["you're [literally] [making me cry|triggering me|the worst person alive|worse than hitler]!",!0],["you're [literally] perpetuating {concepts.terrible?2}!",!0],["your {marginalized.verbs:2} of {marginalized.adjectives?3} {individuals} is [really|very|] problematic!",!1],["your [fucking|damn|goddamn|] {insults.nouns} {privileged.nouns}-privileged opinion[ is|s are] [literally] [fucking] worthless!",!1],["{concepts.terrible?2} is [so] [fucking|goddamn|damn|] annoying!",!1],["{concepts.terrible} is [fucking] problematic!",!1],["{concepts.terrible} keeps me from having any [fucking|goddamn|damn] rights!",!0],["{statementToldYouTo} [fucking] [accept|acknowledge|respect] that you can be fat and healthy!",!0],["{statementToldYouTo} [fucking] [accept|respect|acknowledge] {concepts.awesome?2}?",!1],["{triggers} is [literally] [a trigger for|triggering|incredibly triggering to] me!",!1]],tumblr.resources.titles=["erasing {concepts.terrible}","fighting {concepts.terrible}","social justice and {concepts.awesome}","this is social justice","this is {privileged.nouns} privilege","{marginalized.nouns} microaggressions","{marginalized.nouns} {concepts.awesome}","{privileged.nouns} crimes","{privileged.nouns} tears","{revolutions}"],tumblr.resources.triggers=tumblrPrePostfixer(["appearance","color","fat","femininity","gender","non-gender","non-sexuality","obesity","sexuality","thin","weight loss"],["appropriation","culture","exotification","hate","labels","opinions","shaming","standards"]);var generateInsult,generateParagraph,generateUsername,renderInsult,renderBlog;generateInsult=function(a){var b="";return a?(b+="{insults.statements}, you ",Math.random()>.3&&(b+="{insults.adjectives} "),Math.random()>.3&&(b+="{marginalized.nouns|marginalized.adjectives}-{marginalized.verbs}, ")):b+="you ",b+="{privileged.nouns}-{privileged.adjectives} {insults.nouns}",b.replaceTerms()},generateParagraph=function(a,b,c){var d=[],e=Math.round(("undefined"==typeof b?3:b)+Math.random()*("undefined"==typeof c?5:c));return d=_.map(_.sample(tumblr.resources.statements,e),function(a){if(!a[1]||Math.random()>.7)return a[0];var b=a[0].slice(0,-1),c=a[0].slice(-1);return b+", "+generateInsult(!1)+c}),d[0]="{intros} "+d[0],Math.random()>.5&&d.push("{conclusions} {insults.statements}!"),d.join(" ").replaceTerms().tumblrize(a)},generateUsername=function(){return"{marginalized.nouns}".randomRepeat(2,2).replaceTerms().toLowerCase().replace(/[^a-z]/g,"")},renderInsult=function(){$("#insult").empty().append($("<p>").text(generateInsult(!0).tumblrize(!1).toUpperCase()))},renderBlog=function(){var a,b,c,d,e,f,g=13+Math.floor(10*Math.random()),h=generateUsername(),i=.8,j=[],k=[];for(b=tumblr.resources.titles.random().replaceTerms(),c=[g,"{alignments}","{politics.nouns}","{politics.nouns}","{politics.nouns}"].join(" / ").replaceTerms(),d=_.map(_.sample(tumblr.resources.presentations,5),function(a){return $("<li>").text(a.replaceTerms().tumblrize()+".")}),e=$("<p>").attr("class","top").text(generateParagraph(Math.random()>i)),a=0;a<2+3*Math.random();a+=1)e=$("<div>").append($("<cite>").text(generateUsername()+":"),$("<blockquote>").append(e),$("<p>").attr("class","reply").text(Math.random()>.6?generateParagraph(Math.random()>i):(generateInsult(!0)+"!").tumblrize(Math.random()>i)));for($(_.sample(e.find(".reply"))).empty().append($("<img>").attr("src","static/img/inline/"+tumblr.resources.images.inline.random())),_.forEach(_.sample(tumblr.resources.concepts.awesome,3+Math.floor(3*Math.random())),function(a){k.push($("<li>").text("#"+a))}),a=0;a<5+10*Math.random();a+=1)f=$("<li>"),f.append($("<strong>").attr("class","username").text(generateUsername())),Math.random()>.7?f.append($("<span>").attr("class","reblog").text(" reblogged this from "+h+" and added:")).append($("<p>").attr("class","insult").text((generateInsult(!0)+"!").tumblrize(!0))):f.append($("<span>").attr("class","like").text(" likes this")),j.push(f);$("#title").text(b),$("#username").text("hi, i'm "+h+"!"),$("#about").text(c),$("#presentation").empty().append(d),$("#copyright").empty().append("copyright © 2012-"+(new Date).getFullYear()+" "+h+". all rights reserved worldwide. theme by "+generateUsername()+", modified by "+h+"."),$("#argument").empty().append(e),$("#hashtags").empty().append(k),$("#reblogs").empty().append(j),$("body").css("background-image","url(static/img/bg/"+tumblr.resources.images.backgrounds.random()+")")},$(document).ready(function(){var a;$(".privileged-groups-length").text(" "+tumblr.resources.privileged.adjectives.length*tumblr.resources.privileged.nouns.length+" "),$(".marginalized-groups-length").text(" "+(tumblr.resources.marginalized.nouns.length+tumblr.resources.marginalized.adjectives.length)*tumblr.resources.marginalized.verbs.length+" "),a=function(){$("#controls span").animate({opacity:1},500).animate({opacity:.6},500).animate({opacity:1},500).animate({opacity:1},1e3,a)},a(),renderBlog(),$("#controls button.generate-insult").click(function(){$("#insult").show(),renderInsult()}),$("#controls button.generate-blog").click(function(){$("#insult").hide(),renderBlog()})});