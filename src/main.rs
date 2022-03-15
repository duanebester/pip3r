// use std::io::{self, Read};

// fn main() {
//     let stdin = io::stdin();
//     let mut stdin = stdin.lock(); // locking is optional

//     let mut line = String::new();

//     // Could also `match` on the `Result` if you wanted to handle `Err` 
//     while let Ok(n_bytes) = stdin.read_to_string(&mut line) {
//         if n_bytes == 0 { break }
//         println!("Found new line -- {}", line);
//         line.clear();
//     }
// }

use std::io::{self, BufRead};

fn main() {
    let stdin = io::stdin();
    for line in stdin.lock().lines() {
        let line = line.expect("Could not read line from standard in");
        println!("found new line -- {}", line);
    }
}