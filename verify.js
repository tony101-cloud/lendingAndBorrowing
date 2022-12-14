const { run } = require("hardhat");

const verify = async (ContractAddress, args) => {
  console.log("verifying contracts .....");
  try {
    await run("verify:verify", {
      address: ContractAddress,
      constructorArguments: args,
    });
  } catch (e) {
    if (e.message.toLowerCase().includes("already verifid")) {
      console.log("Already Verified");
    } else {
      console.log(e);
    }
  }
};

module.exports = { verify };
