export interface Proof {
  scheme: string; // "g16"
  curve: string; // "bn128"
  proof: {
    a: string[];
    b: string[][];
    c: string[];
  };
  inputs: string[];
}
