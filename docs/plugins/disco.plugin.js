//META{ "name": "RoleManager", "website": "https://hootsdev.github.io/Disco.th" }*//
global.RoleManager = function () {
    var listener;
  
    class RoleManager {
        getName() {
            return "RoleManager"
        }
  
        getDescription() {
            return "Various stuff"
        }
  
        getVersion() {
            return "0.0.1"
        }
  
        getAuthor() {
            return "HOOTSMAN"
        }
  
        start() {
            // layerContainer-2lfOPe userPopoutOuter-1OHwPL  popout_29507
            const ob = document.getElementsByClassName("layerContainer-2lfOPe")
            console.log(ob);
            console.log(this);
            this.removeRoleStyles();
            Object.values(ob).forEach(x => {
                console.log(x)
                x.addEventListener(("change", listener, true))
            })
            return document.body.addEventListener("focus", listener, true)
        }
  
        stop() {
            return document.body.removeEventListener("focus", listener, true)
        }
  
        removeRoleStyles() {
            Object.values(document.getElementsByClassName("roleCircle-3TFUOr")).forEach(x => {
                x.removeAttribute("style")
            })
        }
  
        listener = function (ev) {
            
            //  do nothing
            console.log(ev);
            if (ev instanceof FocusEvent) {
                console.log("pop gere!")
            }
        };
  

    }
    return RoleManager;
  }.call(this);