import React from "react";
import "./Terminal.css";
function Terminal() {
  return (
    <div className="terminal">
      <div className="terminal-lines">
        <pre>
          <output>
            {`webpack: Compiled successfully.
webpack: Compiling...
Hash: 33d8c38093d5e8261eac
Version: webpack 3.11.0
Time: 1337ms
                               Asset       Size  Chunks                    Chunk Names
                          project.js    12.3 MB       0  [emitted]  [big]  project
                        dashboard.js    6.36 MB       1  [emitted]  [big]  dashboard
                         organize.js    5.29 MB       2  [emitted]  [big]  organize
                          proPens.js    4.92 MB       3  [emitted]  [big]  proPens
0.81c79b4db476a98d272f.hot-update.js    87.4 kB       0  [emitted]         project
1.81c79b4db476a98d272f.hot-update.js    7.94 kB       1  [emitted]         dashboard
81c79b4db476a98d272f.hot-update.json   52 bytes          [emitted]
                       manifest.json  272 bytes          [emitted]
[./app/javascript/common/components/Overlay.js] ./app/javascript/common/components/Overlay.js 2.42 kB {0} {1} [built]`}
          </output>
        </pre>
      </div>
    </div>
  );
}

export default Terminal;
