import child from "child_process";

let running = false;
let runner: child.ChildProcess;
let runners: child.ChildProcess[] = [];

function playAudio(file: string, multiRun: boolean = true) {
  return new Promise((resolve) => {
    try {
      if (running && !multiRun) return;

      runner = child.spawn("ffplay", [file, "-nodisp", "-autoexit"], {
        stdio: "ignore",
      });

      runners.push(runner);

      running = true;

      runner.on("exit", () => {
        killAudio();
        resolve(null);
      });
    } catch (e) {
      console.log(e);
      resolve(null);
    }
  });
}

function killAudio(pid?: number) {
  return new Promise((resolve) => {
    try {
      if (!pid) {
        for (let rn of runners) {
          rn.removeListener("exit", () => {
            return;
          });
          rn.kill("SIGKILL");
        }
      } else {
        process.removeListener("exit", () => {
          return;
        });
        process.kill(pid, "SIGKILL");
      }

      runners = [];
      running = false;
      resolve(null);
    } catch (e) {
      console.log(e);
      resolve(null);
    }
  });
}

export { playAudio, killAudio };
