import { initialize } from "zokrates-js";
import axios from "axios";
import type { Proof } from "./types/types";

// TODO: Maybe: Add option to provide verifying key in case devs want to
// store the verification key on their infrastructure for quicker access.

async function verifyUniquenessProof(proof: Proof): Promise<boolean> {
  // Get verification key
  const resp = await axios.get(
    `https://preproc-zkp.s3.us-east-2.amazonaws.com/antiSybil.verifying.key`
  );
  const vk = resp.data;
  // Verify proof
  const zokProvider = await initialize();
  return zokProvider.verify(vk, proof);
}

async function verifyUSResidencyProof(proof: Proof): Promise<boolean> {
  // Get verification key
  const resp = await axios.get(
    `https://preproc-zkp.s3.us-east-2.amazonaws.com/proofOfResidency.verifying.key`
  );
  const vk = resp.data;
  // Verify proof
  const zokProvider = await initialize();
  return zokProvider.verify(vk, proof);
}

async function verifyMedicalSpecialtyProof(proof: Proof): Promise<boolean> {
  // Get verification key
  const resp = await axios.get(
    `https://preproc-zkp.s3.us-east-2.amazonaws.com/medicalSpecialty.verifying.key`
  );
  const vk = resp.data;
  // Verify proof
  const zokProvider = await initialize();
  return zokProvider.verify(vk, proof);
}

export default {
  verifyUniquenessProof,
  verifyUSResidencyProof,
  verifyMedicalSpecialtyProof,
};
export { verifyUniquenessProof, verifyUSResidencyProof, verifyMedicalSpecialtyProof };
