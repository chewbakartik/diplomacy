[Diplomacy][1] is a [Risk][2]-like board game with a strong Internet fan base. Many browser-based clients exist, but none have quite the flexibility of the play-by-email servers they intended to replace. This online Diplomacy project seeks to be as full-featured as possible and take full advantage of the modern web browser's abilities.

[1]:http://en.wikipedia.org/wiki/Diplomacy_(game)
[2]:http://en.wikipedia.org/wiki/Risk_(game)

# Goals
1. The development process will be fully transparent. Custom map and ruleset creation should be simple but flexible.
2. The user interface will be responsive and fun.
3. The project will bring together the best characteristics of previous Diplomacy implementations.
4. The project will be fully unit-tested. (This is for my own good and reparations against many years of crimes against testability.)
5. The project will keep the good, dedicated players in and the lame quitters out.
6. Rapid games (< 15 minutes per season) will be possible without page refreshes.

# Technology
The application as a whole consists of three parts:
 * The website. Developed using AngularJS and MongoDB.
 * The adjudicator, responsible for taking a set of moves and resolving them. Developed in raw JavaScript.
 * The server, responsible for scheduling adjudication events and dispensing the website. Developed with NodeJS/Express.

# Installation

1. Install NodeJS and MongoDB.
2. Run `npm install` inside the directory, then `grunt serve`.
