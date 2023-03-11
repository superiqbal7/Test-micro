# Use the nats-streaming image as the base image
FROM nats-streaming:0.17.0

# Set the working directory to /app
WORKDIR /app

# Copy the NATS server configuration file into the container
COPY nats.conf /app/nats.conf

# Expose the NATS server ports
EXPOSE 4222
EXPOSE 8222

# Start the NATS server with the specified arguments
CMD ["nats-streaming-server", "-config", "nats.conf", "-p", "4222", "-m", "8222", "-hbi", "5s", "-hbt", "5s", "-hbf", "2", "-SD", "-cid", "ticketing"]
