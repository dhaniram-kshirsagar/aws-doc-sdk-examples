/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0

ABOUT THIS NODE.JS EXAMPLE: This example works with Version 3 (V3) of the AWS SDK for JavaScript,
which is scheduled for release later in 2020. The prerelease version of the SDK is available
at https://github.com/aws/aws-sdk-js-v3. The 'SDK for JavaScript Developer Guide' for V3 is also
scheduled for release later in 2020, and the topic containing this example will be hosted at
https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/iam-examples-managing-users.html.

Purpose:
iam_listusers.js demonstrates how to list IAM users.

Inputs :
- REGION

Running the code:
node iam_listusers.js
 */

// snippet-start:[iam.JavaScript.users.listUsersV3]

// Import required AWS SDK clients and commands for Node.js
const { IAMClient, ListUsersCommand } = require("@aws-sdk/client-iam");

// Set the AWS Region
const REGION = "region"; //e.g. "us-east-1"

// Set the parameters
const params = { MaxItems: 10 };

// Create IAM service object
const iam = new IAMClient(REGION);

const run = async () => {
  try {
    const data = await iam.send(new ListUsersCommand(params));
    const users = data.Users || [];
    users.forEach(function (user) {
      console.log("User " + user.UserName + " created", user.CreateDate);
    });
  } catch (err) {
    console.log("Error", err);
  }
};
run();
// snippet-end:[iam.JavaScript.users.listUsersV3]
exports.run = run; //for unit tests only
