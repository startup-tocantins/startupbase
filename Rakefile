require 'rubygems'
require 'market_bot'
require 'pry'
require 'erb'
require 'action_view'

task :getapps do
  File.open('startups.list', 'r').each_line do |package|
    get_play_information(package.chomp)
  end  
end

def get_play_information(package)
  post_file = "_posts/2016-01-01-#{package.gsub('.','-')}.markdown"
  unless File.exist?(post_file)
    puts "downloading information from #{package}"
    app = MarketBot::Android::App.new(package)
    app.update
    description  = ActionView::Base.full_sanitizer.sanitize(app.description) 
  
    post_template = File.open('_templates/post.erb','r').read
    post = File.new(post_file,'w+')
    renderer = ERB.new(post_template)
    post.puts output = renderer.result(binding)
  else
    puts "skip #{package}"
  end
end

def abs_statups_info
  'http://amazoniavalley.org/?feed=job_feed&search_location&job_categories=startups&search_keywords&job_region=59'
end
