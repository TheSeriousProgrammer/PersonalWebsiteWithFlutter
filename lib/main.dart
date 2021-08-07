import 'dart:ui';

import 'package:google_fonts/google_fonts.dart';
import 'package:flutter/material.dart';
import 'dart:math';

void main() {
  runApp(MyApp());
}

var frameworks = [
  {"name": "Tensorflow", "img": "assets/images/tf.png"},
  {"name": "Flutter", "img": "assets/images/flutter.png"},
  {"name": "Arduino", "img": "assets/images/arduino.png"},
  {"name": "Native Android", "img": "assets/images/android.png"},
  {"name": "OpenCV", "img": "assets/images/opencv.png"},
  {"name": "Raspberry Pi", "img": "assets/images/raspberry.png"},
  {"name": "Flask", "img": "assets/images/flask.png"}
];

var languages = [
  {"name": "Python", "img": "assets/images/python.png"},
  {"name": "Java", "img": "assets/images/java.png"},
  {"name": "C++", "img": "assets/images/Cpp.png"},
  {"name": "Javascript", "img": "assets/images/javascript.png"},
  {"name": "Dart", "img": "assets/images/dart.png"},
  {"name": "Bash", "img": "assets/images/bash.png"}
];

var tools = [
  {"name": "Vim", "img": "assets/images/vim.png"},
  {"name": "Docker", "img": "assets/images/docker.png"},
  {"name": "Android Studio", "img": "assets/images/android-studio.png"},
  {"name": "Arduino IDE", "img": "assets/images/arduino.png"}
];

var pages = [frameworks, languages, tools];
var pageNames = ["Frameworks", "Languages", "Tools"];
var pageIndexes = [0, 1, 2];

var orbitRadius = 150.0;

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        title: 'TheSeriousProgrammer',
        themeMode: ThemeMode.dark,
        darkTheme: ThemeData.dark(),
        theme: ThemeData(
          primarySwatch: Colors.blue,
        ),
        home: Scaffold(
            body: Container(
                child: Center(child: WelcomeScreen()),
                decoration: BoxDecoration(
                  gradient: LinearGradient(
                      begin: Alignment.topLeft,
                      end: Alignment.bottomRight,
                      colors: [Colors.black87, Colors.black12]),
                ))));
  }
}

class WelcomeScreen extends StatefulWidget {
  WelcomeScreen({Key key}) : super(key: key);

  @override
  _WelcomeScreenState createState() => _WelcomeScreenState();
}

class _WelcomeScreenState extends State<WelcomeScreen>
    with SingleTickerProviderStateMixin {
  AnimationController anim_ctrl;
  Animation<double> anim_index;

  String title = "The Serious\nProgrammer";

  @override
  void initState() {
    anim_ctrl =
        AnimationController(duration: const Duration(seconds: 2), vsync: this);
    anim_index =
        Tween<double>(begin: 0, end: title.length.toDouble()).animate(anim_ctrl)
          ..addListener(() {
            setState(() {
              // The state that has changed here is the animation object’s value.
            });
          });
    //anim_ctrl.repeat();
    anim_ctrl.forward();
  }

  @override
  void dispose() {
    anim_ctrl.stop();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Padding(
            padding: const EdgeInsets.only(top: 30, left: 30, right: 30),
            child: Text(
              title.substring(0, anim_index.value.toInt()) +
                  (anim_index.value.toInt() == title.length ? "" : "_"),
              textAlign: TextAlign.center,
              style: GoogleFonts.courierPrime(
                  fontSize: 40,
                  color: Colors.greenAccent.shade100,
                  fontWeight: FontWeight.w500),
            ),
          ),
          KnownStuffDisplay(),
        ],
      ),
    );
  }
}

class KnownStuffDisplay extends StatefulWidget {
  KnownStuffDisplay({Key key}) : super(key: key);

  @override
  _KnownStuffDisplayState createState() => _KnownStuffDisplayState();
}

class _KnownStuffDisplayState extends State<KnownStuffDisplay> {
  final PageController controller = PageController(initialPage: 0);
  int currentDisplayedPage = 0;

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        SizedBox(
          height: orbitRadius * 3,
          width: orbitRadius * 3,
          child: Stack(
            children: [
              Center(
                child: Image.asset(
                  "assets/images/icon.png",
                  height: 150,
                  width: 150,
                ),
              ),
              PageView(
                  scrollDirection: Axis.horizontal,
                  controller: controller,
                  onPageChanged: (val) {
                    setState(() {
                      currentDisplayedPage = val;
                    });
                  },
                  children: pages
                      .map(
                        (page) => Container(
                          child: Center(
                              child: RevolvingButtons(
                                  orbitRadius: 150,
                                  menuItems: page.map((item) {
                                    return RevolvingButton(
                                        child: Column(
                                          children: [
                                            Expanded(
                                                flex: 4,
                                                child:
                                                    Image.asset(item["img"])),
                                            Expanded(
                                              flex: 1,
                                              child: Text(
                                                item["name"],
                                                style: TextStyle(
                                                    fontFamily: "roboto"),
                                              ),
                                            )
                                          ],
                                        ),
                                        width: 100,
                                        height: 100);
                                  }).toList(),
                                  centralWidget: SizedBox())),
                        ),
                      )
                      .toList()),
            ],
          ),
        ),
        SizedBox(
          width: orbitRadius * 2,
          height: 30,
          child: Stack(
            children: [
              AnimatedPositioned(
                duration: Duration(milliseconds: 500),
                width: orbitRadius * 2 / pages.length,
                height: 30,
                left: currentDisplayedPage * (2 * orbitRadius / pages.length),
                child: RoundedContainer(
                    color: Colors.greenAccent,
                    size: Size((orbitRadius * 2) / pages.length, 30)),
              ),
              Center(
                child: Row(
                  children: pageIndexes
                      .map((index) => Expanded(
                            child: InkWell(
                              child: Text(
                                pageNames[index],
                                textAlign: TextAlign.center,
                                style: TextStyle(
                                    fontSize: 15,
                                    fontWeight: currentDisplayedPage == index
                                        ? FontWeight.w700
                                        : null,
                                    color: currentDisplayedPage == index
                                        ? Colors.greenAccent
                                        : Colors.grey),
                              ),
                              onTap: () {
                                controller.animateToPage(index,
                                    curve: Curves.linear,
                                    duration: Duration(milliseconds: 500));
                              },
                            ),
                          ))
                      .toList(),
                ),
              ),
            ],
          ),
        )
      ],
    );
  }
}

class RevolvingButtons extends StatefulWidget {
  final double orbitRadius;
  List<RevolvingButton> menuItems;
  Widget centralWidget;
  RevolvingButtons(
      {@required this.orbitRadius,
      @required this.menuItems,
      @required this.centralWidget});

  @override
  _RevolvingButtonsState createState() => _RevolvingButtonsState();
}

class _RevolvingButtonsState extends State<RevolvingButtons>
    with SingleTickerProviderStateMixin {
  int _counter = 0;

  AnimationController anim_ctrl;
  Animation<double> anim_angle;

  @override
  void initState() {
    anim_ctrl =
        AnimationController(duration: const Duration(seconds: 18), vsync: this);
    anim_angle = Tween<double>(begin: 0, end: 2 * pi).animate(anim_ctrl)
      ..addListener(() {
        setState(() {
          // The state that has changed here is the animation object’s value.
        });
      });
    anim_ctrl.repeat();
    //anim_ctrl.forward();
  }

  @override
  void dispose() {
    anim_ctrl.stop();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    List<Widget> revolvingMenus = [];
    for (int i = 0; i < widget.menuItems.length; i++) {
      double angleOffset = 2 * pi * i / widget.menuItems.length;

      revolvingMenus.add(Positioned(
          top: widget.orbitRadius -
              widget.menuItems[i].height / 2 +
              widget.orbitRadius * sin(anim_angle.value + angleOffset),
          right: widget.orbitRadius -
              widget.menuItems[i].width / 2 +
              widget.orbitRadius * cos(anim_angle.value + angleOffset),
          child: widget.menuItems[i]));
    }
    return PreferredSize(
      preferredSize: Size.square(widget.orbitRadius * 3),
      child: Center(
        child: Stack(
          clipBehavior: Clip.none,
          children: (<Widget>[
                Circle(
                  color: Colors.grey,
                  radius: widget.orbitRadius,
                  child: widget.centralWidget,
                ),
              ] +
              revolvingMenus),
        ),
      ),
    );
  }
}

class RevolvingButton extends StatelessWidget {
  final double height;
  final double width;
  final Widget child;

  RevolvingButton(
      {@required this.child, @required this.width, @required this.height});

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: this.height,
      width: this.width,
      child: this.child,
    );
  }
}

class Circle extends StatefulWidget {
  Color color;
  double radius;
  Widget child;
  Circle({@required this.color, @required this.radius, this.child});

  @override
  _circleState createState() => _circleState();
}

class _circleState extends State<Circle> {
  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: widget.radius * 2,
      width: widget.radius * 2,
      child: Container(
          height: widget.radius * 2,
          width: widget.radius * 2,
          child:
              widget.child == null ? SizedBox() : Center(child: widget.child),
          decoration: BoxDecoration(
              //color: widget.color,
              borderRadius: BorderRadius.circular(widget.radius),
              border: Border.all(color: widget.color, width: 2))),
    );
  }
}

class RoundedContainer extends StatelessWidget {
  Color color;
  Size size;

  RoundedContainer({@required this.color, @required this.size});

  @override
  Widget build(BuildContext context) {
    return Container(
      child: SizedBox(height: size.height, width: size.width),
      decoration: BoxDecoration(
          color: Colors.transparent,
          borderRadius: BorderRadius.circular(10),
          border: Border.all(width: 2, color: color)),
    );
  }
}
