require 'elasticsearch/extensions/test/cluster'
RSpec.configure do |config|
  config.before(:all, :elasticsearch) do
    Elasticsearch::Extensions::Test::Cluster.start(nodes: 1) unless Elasticsearch::Extensions::Test::Cluster.running?
  end

  config.after(:all, :elasticsearch) do
    Elasticsearch::Extensions::Test::Cluster.stop if Elasticsearch::Extensions::Test::Cluster.running?
  end
end
