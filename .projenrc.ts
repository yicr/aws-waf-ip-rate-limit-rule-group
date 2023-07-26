import { awscdk, javascript } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'yicr',
  authorAddress: 'yicr@users.noreply.github.com',
  cdkVersion: '2.63.0',
  defaultReleaseBranch: 'main',
  name: '@gammarer/aws-waf-rate-limit-rule-group',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/yicr/aws-waf-rate-limit-rule-group.git',
  keywords: ['aws', 'cdk', 'aws-cdk', 'waf', 'acl', 'rate'],
  releaseToNpm: true,
  npmAccess: javascript.NpmAccess.PUBLIC,
  stability: 'experimental', // stable
  minNodeVersion: '16.0.0',
  workflowNodeVersion: '16.19.1',
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
      schedule: javascript.UpgradeDependenciesSchedule.expressions(['0 19 * * *']),
    },
  },
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['yicr'],
  },
});
project.synth();