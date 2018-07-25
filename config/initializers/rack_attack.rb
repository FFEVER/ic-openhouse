Rack::Attack.throttle("requests by ip", limit: 5, period: 5) do |request|
  request.ip
end

Rack::Attack.throttled_response = lambda do |env|
  retry_after = (env["rack.attack.match_data"] || {})[:period]
  [
    429,
    { "Content-Type" => "application/json", "Retry-After" => retry_after.to_s },
    [{ error: "Throttle limit reached. Retry later." }.to_json],
  ]
end

